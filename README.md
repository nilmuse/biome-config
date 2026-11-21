# @nilmuse/biome-config

Shared [Biome](https://biomejs.dev) configuration for the `nilmuse` npm portfolio. Encodes the
single linter/formatter standard (`assembly.md` §4.8/§7) so every package inherits it via `extends`.

---

## Installation

```bash
npm install -D @nilmuse/biome-config @biomejs/biome
```

---

## Usage

In a package `biome.json`:

```json
{
  "extends": ["@nilmuse/biome-config/biome"]
}
```

Biome resolves the package from `node_modules` (Biome 2.4+). Paths and globs in the consuming
config stay relative to that consuming `biome.json`.

The shared config sets the formatter (2-space, width 100, `lf`, single quotes, always semicolons,
trailing commas) and the recommended linter rules plus `noUnusedVariables`, `noExplicitAny` (warn)
and `noUselessTypeConstraint`. Override per package as needed after the `extends`.

---

## License

MIT
