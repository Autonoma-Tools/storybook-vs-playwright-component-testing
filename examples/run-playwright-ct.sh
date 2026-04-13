#!/usr/bin/env bash
set -euo pipefail

# -----------------------------------------------
# Run Playwright Component Tests
# -----------------------------------------------
# Prerequisites:
#   npm install
#   npx playwright install chromium
#
# This mounts each component in a real Chromium browser
# and runs the assertions in playwright-ct/**/*.spec.tsx.
# -----------------------------------------------

echo "Installing Playwright browsers (if needed)..."
npx playwright install chromium --with-deps 2>/dev/null || true

echo ""
echo "Running Playwright CT tests..."
npx playwright test -c playwright-ct.config.ts

echo ""
echo "All Playwright component tests passed."
