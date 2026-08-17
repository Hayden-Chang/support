import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { test } from "node:test";

const pagePath = new URL("../keepsakeatlas/index.html", import.meta.url);
const page = await readFile(pagePath, "utf8");

test("support page exposes app-specific contact information", () => {
  assert.match(page, /<title>映册技术支持 \| KeepsakeAtlas Support<\/title>/);
  assert.match(page, /mailto:shenshuoyouguang@outlook\.com/);
  assert.match(page, /运营者 \/ Operator：张海超（Haichao Zhang）/);
});

test("support page links to every required destination", async () => {
  const relativeDestinations = [
    "./favicon.svg",
    "../privacy-policies/keepsakeatlas/privacy-policy.html",
    "../terms-of-service/keepsakeatlas/terms-of-service.html",
  ];

  for (const destination of relativeDestinations) {
    assert.match(page, new RegExp(`href="${destination.replaceAll(".", "\\.")}"`));
    await access(new URL(destination, pagePath));
  }

  assert.match(page, /href="https:\/\/apps\.apple\.com\/app\/id6797578859"/);
});

test("support page retains bilingual and responsive boundaries", () => {
  assert.match(page, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
  assert.match(page, /@media \(max-width: 700px\)/);
  assert.match(page, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(page, /lang="en"/);
  assert.match(page, /常见问题 · FAQ/);
});
