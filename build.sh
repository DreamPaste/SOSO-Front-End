#!/usr/bin/env bash
set -euo pipefail

# always run from repo root
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "▶ Clean output"
rm -rf output && mkdir output

echo "▶ Install deps"
pnpm install --frozen-lockfile --ignore-scripts

echo "▶ Turbo build"
pnpm turbo run build --filter=apps/web

echo "▶ Copy artifacts"
cp -R apps/web/.next          output/.next
cp -R apps/web/public         output/public
cp    apps/web/package.json   output/
cp    apps/web/next.config.*  output/ || true

echo "✅ output/ ready"
