// @lovable.dev/vite-tanstack-config already includes the following - do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Public GitHub Pages URL: https://kdfinis.github.io/sator-digital/
const pagesBase = process.env.GITHUB_PAGES === "1" ? "/sator-digital/" : "/";

export default defineConfig({
  // SPA shell for static GitHub Pages (no Node server).
  tanstackStart: {
    server: { entry: "server" },
    spa: process.env.GITHUB_PAGES === "1" ? { enabled: true } : undefined,
  },
  // Skip Nitro when building static Pages assets.
  nitro: process.env.GITHUB_PAGES === "1" ? false : undefined,
  vite: {
    base: pagesBase,
  },
});
