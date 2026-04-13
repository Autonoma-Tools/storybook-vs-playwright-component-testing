# Storybook vs Playwright Component Testing: Full Coverage Without Writing Every Test

Companion code for the Autonoma blog post 'Storybook vs Playwright Component Testing: Full Coverage Without Writing Every Test'. Contains a Button component tested in both Storybook CT (Vitest addon) and Playwright CT, plus a visual-regression config showing where each tool's VRT pipeline slots in.

> Companion code for the Autonoma blog post: **[Storybook vs Playwright Component Testing: Full Coverage Without Writing Every Test](https://getautonoma.com/blog/storybook-vs-playwright-component-testing)**

## Requirements

- Node.js 20+
- npm or pnpm
- React 19 + TypeScript
- Playwright 1.48+ (Chromium auto-downloaded on first run)
- Storybook 9+ with the Vitest experimental addon

## Quickstart

```bash
git clone https://github.com/Autonoma-Tools/storybook-vs-playwright-component-testing.git
cd storybook-vs-playwright-component-testing
npm install
# Run Storybook CT tests (Vitest addon)
npm run test:storybook
# Run Playwright CT tests
npx playwright install chromium
npm run test:playwright-ct
# Launch Storybook UI
npm run storybook
```

## Project structure

```
.storybook/
  main.ts
  preview.ts
  vitest.setup.ts
examples/
  run-playwright-ct.sh
  run-storybook-tests.sh
playwright-ct/
  Button.spec.tsx
  visual.config.ts
src/
  Button.css
  Button.tsx
storybook/
  Button.stories.tsx
.gitignore
LICENSE
README.md
package.json
playwright-ct.config.ts
tsconfig.json
vite.config.ts
vitest.workspace.ts
```

- `src/` — primary source files for the snippets referenced in the blog post.
- `examples/` — runnable examples you can execute as-is.
- `docs/` — extended notes, diagrams, or supporting material (when present).

## About

This repository is maintained by [Autonoma](https://getautonoma.com) as reference material for the linked blog post. Autonoma builds autonomous AI agents that plan, execute, and maintain end-to-end tests directly from your codebase.

If something here is wrong, out of date, or unclear, please [open an issue](https://github.com/Autonoma-Tools/storybook-vs-playwright-component-testing/issues/new).

## License

Released under the [MIT License](./LICENSE) © 2026 Autonoma Labs.
