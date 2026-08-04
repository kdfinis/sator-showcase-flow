#!/usr/bin/env bash
# Build SPA and publish to kdfinis/sator-digital (GitHub Pages).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUB=$(mktemp -d)
cd "$ROOT"
GITHUB_PAGES=1 bun run build
cp -R dist/client/assets "$PUB/"
cp dist/client/favicon.ico "$PUB/" 2>/dev/null || true
cp dist/client/robots.txt "$PUB/" 2>/dev/null || true
cp dist/client/_shell.html "$PUB/index.html"
cp dist/client/_shell.html "$PUB/404.html"
touch "$PUB/.nojekyll"
python3 - <<PY
from pathlib import Path
pub = Path("$PUB")
for name in ("index.html", "404.html"):
    p = pub / name
    t = p.read_text(encoding="utf-8", errors="ignore")
    p.write_text(t.replace('href="/favicon.ico"', 'href="/sator-digital/favicon.ico"'), encoding="utf-8")
PY
TARGET="${SATOR_PAGES_REPO:-$HOME/SATOR DIGITAL/site}"
if [[ ! -d "$TARGET/.git" ]]; then
  echo "Clone or set SATOR_PAGES_REPO to local kdfinis/sator-digital checkout"
  exit 1
fi
rsync -a --delete --exclude .git "$PUB/" "$TARGET/"
cd "$TARGET"
git add -A
git commit -m "Deploy Sator Pages build $(date -u +%Y-%m-%dT%H:%MZ)" || echo "No changes"
git push origin main
echo "Live: https://kdfinis.github.io/sator-digital/"
