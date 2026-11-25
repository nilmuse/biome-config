# @nilmuse/biome-config

Shared [Biome](https://biomejs.dev) formatting and lint rules for the `nilmuse` npm packages.
Use `extends` to apply the same rules across projects and override them where needed.

[![npm](https://img.shields.io/npm/v/@nilmuse/biome-config.svg?colorB=brightgreen)](https://www.npmjs.com/package/@nilmuse/biome-config)
[![NPM Downloads](https://img.shields.io/npm/dm/@nilmuse/biome-config.svg?style=flat)](https://www.npmjs.com/package/@nilmuse/biome-config)

---

## Installation

```bash
npm install -D @nilmuse/biome-config @biomejs/biome
```

Requires Biome 2.4 or later.

## Quick start

Create `biome.json` in your project:

```json
{
  "extends": ["@nilmuse/biome-config/biome"]
}
```

Then check your source files:

```bash
npx biome check src
```

Biome resolves the shared config from `node_modules`. Paths and globs in your config stay
relative to your own `biome.json`.

## Configuration

The formatter uses two spaces, a line width of 100, LF line endings, single quotes, semicolons,
trailing commas, and parentheses around arrow-function parameters.

The linter enables the recommended rules. `noUnusedVariables` and `noUselessTypeConstraint`
are errors; `noExplicitAny` is a warning. Import organization is enabled through Biome assist.

To change a setting for one project, add the corresponding field alongside `extends` in that
project's `biome.json`.

## License

MIT
