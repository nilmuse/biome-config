import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const configPath = fileURLToPath(new URL('../biome.json', import.meta.url));
const config = JSON.parse(readFileSync(configPath, 'utf8'));

test('biome.json is valid JSON with a schema', () => {
  assert.equal(typeof config.$schema, 'string');
});

test('formatter matches the portfolio standard', () => {
  assert.equal(config.formatter.indentStyle, 'space');
  assert.equal(config.formatter.indentWidth, 2);
  assert.equal(config.formatter.lineWidth, 100);
  assert.equal(config.formatter.lineEnding, 'lf');
  assert.equal(config.javascript.formatter.quoteStyle, 'single');
  assert.equal(config.javascript.formatter.semicolons, 'always');
});

test('linter enables recommended rules', () => {
  assert.equal(config.linter.enabled, true);
  assert.equal(config.linter.rules.recommended, true);
});
