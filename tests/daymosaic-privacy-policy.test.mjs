import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const htmlPath = new URL("../privacy-policies/daymosaic/privacy-policy.html", import.meta.url);
const markdownPath = new URL("../privacy-policies/daymosaic/privacy-policy.md", import.meta.url);

test("DayMosaic policy is bilingual and locks its AI data path", async () => {
  const [html, markdown] = await Promise.all([
    readFile(htmlPath, "utf8"),
    readFile(markdownPath, "utf8"),
  ]);

  for (const source of [html, markdown]) {
    assert.match(source, /DayMosaic/);
    assert.match(source, /api\.keeline\.xyz/);
    assert.match(source, /external AI model provider/i);
    assert.match(source, /30 days/i);
    assert.match(source, /不会改动真实日程|does not change your real/i);
    assert.match(source, /shenshuoyouguang@outlook\.com/);
  }

  assert.match(html, /<section id="english"[^>]+lang="en">/);
  assert.match(html, /<section id="chinese"[^>]+lang="zh-CN">/);
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
  assert.doesNotMatch(html, /<script\b/i);
});
