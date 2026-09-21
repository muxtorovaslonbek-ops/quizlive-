// Verifies translations: same keys in every language, and every t('key') used in src/ exists.
// Run:  node scripts/check-i18n.mjs
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { translations } from '../src/i18n/translations.js';

const langs = Object.keys(translations);
const base  = new Set(Object.keys(translations.en));
let errors  = 0;

for (const lang of langs) {
  const keys = new Set(Object.keys(translations[lang]));
  for (const k of base) if (!keys.has(k)) { console.error(`[${lang}] missing key: ${k}`); errors++; }
  for (const k of keys) if (!base.has(k)) { console.error(`[${lang}] extra key not in en: ${k}`); errors++; }
}

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : /\.(jsx?|mjs)$/.test(f) ? [p] : [];
});

const used = new Set();
for (const file of walk('src')) {
  const src = readFileSync(file, 'utf8');
  for (const m of src.matchAll(/\bt\(\s*(['"`])([\w.]+)\1/g)) used.add(m[2]);
  for (const m of src.matchAll(/labelKey:\s*'([\w.]+)'/g)) used.add(m[1]);
  for (const m of src.matchAll(/'((?:error|game|login|admin)\.[\w.]+)'/g)) used.add(m[1]);
}
for (const k of used) {
  if (!base.has(k)) { console.error(`used in code but not defined: ${k}`); errors++; }
}

// Placeholder parity: {name} tokens must match between languages.
for (const k of base) {
  const grab = (v) => typeof v === 'string' ? [...v.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',') : 'fn';
  const a = grab(translations.en[k]);
  for (const lang of langs) {
    if (lang === 'en' || translations[lang][k] === undefined) continue;
    const b = grab(translations[lang][k]);
    if (a !== b) { console.error(`[${lang}] placeholder mismatch in ${k}: en={${a}} ${lang}={${b}}`); errors++; }
  }
}

console.log(errors ? `\n${errors} problem(s).` : `OK — ${base.size} keys × ${langs.length} languages, ${used.size} key uses checked.`);
process.exit(errors ? 1 : 0);
