# mattgallo.dev

Personal portfolio — a static React + TypeScript single-page app built with [Vite](https://vite.dev) and deployed on [Vercel](https://vercel.com).

## Development

```sh
yarn install
yarn dev        # http://localhost:8080
yarn build      # type-checks, then outputs static files to dist/
yarn preview    # serve the production build locally
yarn typecheck  # TypeScript 7 (tsc), strict mode
yarn lint       # oxlint
```

A [lefthook](https://lefthook.dev) pre-commit hook (`lefthook.yml`) formats staged files with Prettier and runs `oxlint --fix` on them.
It's installed automatically by `yarn install`.

## Styling

- Component styles are [CSS modules](https://github.com/css-modules/css-modules) (`*.module.css`) colocated with each component.
- Global styles, fonts, and theme tokens live in `src/styles/global.css`.
- Light/dark mode is driven by `<html data-theme="light|dark">` and CSS custom properties (`--color-*`).
  An inline script in `index.html` applies the saved or system preference before first paint.

## Deploy

Vercel picks up the Vite preset from `vercel.json` (SPA fallback rewrite + long-lived caching for hashed assets).
Pushing to the production branch deploys automatically, or run `yarn deploy` with the Vercel CLI.
