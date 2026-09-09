import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Vec3 = [number, number, number];
export type WireVariant = "sphere" | "icosa" | "cube";
type Tone = "ink" | "bone" | "paper";

function hash(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function smoothstep(a: number, b: number, t: number) {
  const x = Math.min(1, Math.max(0, (t - a) / (b - a)));
  return x * x * (3 - 2 * x);
}

function sphereGeometry() {
  const rings = 6;
  const segs = 10;
  const pts: Vec3[] = [[0, 1, 0]];
  for (let i = 1; i < rings; i++) {
    const phi = (i / rings) * Math.PI;
    for (let j = 0; j < segs; j++) {
      const theta = (j / segs) * Math.PI * 2;
      pts.push([Math.sin(phi) * Math.cos(theta), Math.cos(phi), Math.sin(phi) * Math.sin(theta)]);
    }
  }
  pts.push([0, -1, 0]);
  const edges: [number, number][] = [];
  const idx = (i: number, j: number) => 1 + (i - 1) * segs + (j % segs);
  for (let j = 0; j < segs; j++) {
    edges.push([0, idx(1, j)]);
    edges.push([pts.length - 1, idx(rings - 1, j)]);
  }
  for (let i = 1; i < rings; i++) {
    for (let j = 0; j < segs; j++) {
      edges.push([idx(i, j), idx(i, j + 1)]);
      if (i < rings - 1) edges.push([idx(i, j), idx(i + 1, j)]);
    }
  }
  return { pts, edges };
}

function icosaGeometry() {
  const t = (1 + Math.sqrt(5)) / 2;
  const raw: Vec3[] = [
    [-1, t, 0],
    [1, t, 0],
    [-1, -t, 0],
    [1, -t, 0],
    [0, -1, t],
    [0, 1, t],
    [0, -1, -t],
    [0, 1, -t],
    [t, 0, -1],
    [t, 0, 1],
    [-t, 0, -1],
    [-t, 0, 1],
  ];
  const len = Math.hypot(1, t);
  const pts = raw.map((p) => p.map((v) => v / len) as Vec3);
  const edges: [number, number][] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1], pts[i][2] - pts[j][2]);
      if (d < 1.1) edges.push([i, j]);
    }
  }
  return { pts, edges };
}

function cubeGeometry() {
  const s = 0.72;
  const pts: Vec3[] = [];
  for (const x of [-s, s]) for (const y of [-s, s]) for (const z of [-s, s]) pts.push([x, y, z]);
  const edges: [number, number][] = [];
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 8; j++) {
      let diff = 0;
      for (let k = 0; k < 3; k++) if (pts[i][k] !== pts[j][k]) diff++;
      if (diff === 1) edges.push([i, j]);
    }
  }
  // inner octahedron
  const o = 1.0;
  const octa: Vec3[] = [
    [o, 0, 0],
    [-o, 0, 0],
    [0, o, 0],
    [0, -o, 0],
    [0, 0, o],
    [0, 0, -o],
  ];
  const base = pts.length;
  pts.push(...octa);
  const octaEdges: [number, number][] = [
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 4],
    [2, 5],
    [3, 4],
    [3, 5],
  ];
  for (const [a, b] of octaEdges) edges.push([base + a, base + b]);
  return { pts, edges };
}

const GEOMETRY: Record<WireVariant, () => { pts: Vec3[]; edges: [number, number][] }> = {
  sphere: sphereGeometry,
  icosa: icosaGeometry,
  cube: cubeGeometry,
};

const SPEED: Record<WireVariant, { y: number; x: number; phase: number }> = {
  sphere: { y: 0.45, x: 0.18, phase: 0 },
  icosa: { y: 0.6, x: 0.25, phase: 2.3 },
  cube: { y: 0.35, x: 0.3, phase: 4.6 },
};

function toneColors(tone: Tone) {
  if (tone === "ink") {
    return { line: "238,241,246", accent: "15,107,122", accent2: "201,162,74" };
  }
  return { line: "10,15,28", accent: "110,18,32", accent2: "15,107,122" };
}

/**
 * Continuously rotating 3D wireframe that periodically bursts apart
 * and reassembles. Canvas-based, runs on any static host.
 */
export function WireMorph({
  variant = "sphere",
  tone = "ink",
  className,
}: {
  variant?: WireVariant;
  tone?: Tone;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { pts, edges } = GEOMETRY[variant]();
    const speed = SPEED[variant];
    const colors = toneColors(tone);

    // per-vertex scatter direction for the disassemble burst
    const scatterDirs: Vec3[] = pts.map((p, i) => {
      const jx = (hash(i * 3.7) - 0.5) * 1.4;
      const jy = (hash(i * 7.3) - 0.5) * 1.4;
      const jz = (hash(i * 11.9) - 0.5) * 1.4;
      const v: Vec3 = [p[0] + jx, p[1] + jy, p[2] + jz];
      const len = Math.hypot(v[0], v[1], v[2]) || 1;
      return [v[0] / len, v[1] / len, v[2] / len];
    });

    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let raf = 0;
    const start = performance.now();

    const loop = (now: number) => {
      const t = (now - start) / 1000 + speed.phase;
      ctx.clearRect(0, 0, w, h);

      // burst cycle: assembled ~4s, fly apart ~0.9s, drift, reassemble ~1.1s
      const P = 8;
      const ct = t % P;
      const explode = smoothstep(4.0, 4.9, ct) * (1 - smoothstep(5.9, 7.0, ct));

      const ry = t * speed.y;
      const rx = Math.sin(t * speed.x) * 0.55 + 0.35;
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);

      const scale = Math.min(w, h) * 0.34;
      const cx = w / 2;
      const cy = h / 2;

      const proj: { x: number; y: number; z: number }[] = pts.map((p, i) => {
        const wobble = explode * (0.9 + hash(i * 5.1) * 0.8);
        const px = p[0] + scatterDirs[i][0] * wobble;
        const py = p[1] + scatterDirs[i][1] * wobble;
        const pz = p[2] + scatterDirs[i][2] * wobble;
        // rotate Y then X
        const x1 = px * cosY + pz * sinY;
        const z1 = -px * sinY + pz * cosY;
        const y2 = py * cosX - z1 * sinX;
        const z2 = py * sinX + z1 * cosX;
        const f = 3 / (3 - z2);
        return { x: cx + x1 * f * scale, y: cy + y2 * f * scale, z: z2 };
      });

      // edges fade while disassembled
      const edgeAlphaBase = 0.32 * (1 - explode * 0.75);
      for (const [a, b] of edges) {
        const depth = (proj[a].z + proj[b].z) / 2; // roughly [-1,1]
        const alpha = edgeAlphaBase * (0.35 + 0.65 * (depth + 1) * 0.5);
        ctx.strokeStyle = `rgba(${colors.line},${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(proj[a].x, proj[a].y);
        ctx.lineTo(proj[b].x, proj[b].y);
        ctx.stroke();
      }

      for (let i = 0; i < proj.length; i++) {
        const depthK = (proj[i].z + 1) * 0.5;
        const r = 1 + depthK * 1.3 + explode * 0.6;
        const isAccent = i % 6 === 0;
        const col = isAccent ? (i % 12 === 0 ? colors.accent2 : colors.accent) : colors.line;
        const alpha = 0.35 + depthK * 0.55;
        ctx.fillStyle = `rgba(${col},${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(proj[i].x, proj[i].y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [variant, tone]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 h-full w-full", className)}
      aria-hidden
    />
  );
}
