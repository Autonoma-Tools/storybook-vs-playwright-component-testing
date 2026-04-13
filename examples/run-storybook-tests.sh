#!/usr/bin/env bash
set -euo pipefail

# -----------------------------------------------
# Run Storybook Component Tests via the Vitest addon
# -----------------------------------------------
# Prerequisites:
#   npm install
#
# This executes every play-function test defined in
# storybook/**/*.stories.tsx through Vitest + a headless
# Chromium browser (powered by @vitest/browser).
# -----------------------------------------------

echo "Running Storybook CT tests via Vitest..."
npx vitest --project=storybook --run

echo ""
echo "All Storybook component tests passed."
