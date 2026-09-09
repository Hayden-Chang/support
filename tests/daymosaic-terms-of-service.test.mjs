import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const htmlPath = new URL("../terms-of-service/daymosaic/terms-of-service.html", import.meta.url);
const markdownPath = new URL("../terms-of-service/daymosaic/terms-of-service.md", import.meta.url);

test("DayMosaic terms are bilingual and describe the local-first AI boundary", async () => {
  const [html, markdown] = await Promise.all([
    readFile(htmlPath, "utf8"),
    readFile(markdownPath, "utf8"),
  ]);

  for (const source of [html, markdown]) {
    assert.match(source, /DayMosaic/);
    assert.match(source, /Privacy Policy|隐私政策/i);
    assert.match(source, /external AI model provider|外部 AI 模型服务商/i);
    assert.match(source, /local|本地/i);
    assert.match(source, /shenshuoyouguang@outlook\.com/);
  }

  assert.match(html, /<section id="english"[^>]+lang="en">/);
  assert.match(html, /<section id="chinese"[^>]+lang="zh-CN">/);
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
  assert.doesNotMatch(html, /<script\b/i);
});

test("DayMosaic terms link back to support and the matching privacy policy", async () => {
  const html = await readFile(htmlPath, "utf8");

  assert.match(html, /href="\.\.\/\.\.\/daymosaic\/index\.html"/);
  assert.match(html, /href="\.\.\/\.\.\/daymosaic\/favicon\.svg"/);
  assert.match(html, /Terms of Service/);
  assert.match(html, /服务条款/);
});
