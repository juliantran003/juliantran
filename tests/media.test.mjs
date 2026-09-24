import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const works = JSON.parse(fs.readFileSync(path.join(root, 'public/json/work.json')));
test('every project and collection media URL resolves to a nonempty public asset', () => {
  const slugs = new Set();
  for (const work of works) {
    assert.ok(!slugs.has(work.url)); slugs.add(work.url);
    for (const item of [work, ...(work.collection || [])]) {
      for (const key of ['artwork', 'audio', 'video', 'poster']) {
        if (item[key]) assert.ok(fs.statSync(path.join(root, 'public', item[key])).size > 0, `${work.title}: ${key}`);
      }
    }
    assert.ok(work.blurDataURL.startsWith('data:image/webp;base64,'));
  }
});
