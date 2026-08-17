import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { test } from "node:test";

const pagePath = new URL("../keepsakeatlas/index.html", import.meta.url);
const page = await readFile(pagePath, "utf8");

function relativeLuminance(hex) {
  const channels = hex.match(/[0-9a-f]{2}/gi).map((value) => {
    const normalized = Number.parseInt(value, 16) / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(first, second) {
  const lighter = Math.max(relativeLuminance(first), relativeLuminance(second));
  const darker = Math.min(relativeLuminance(first), relativeLuminance(second));
  return (lighter + 0.05) / (darker + 0.05);
}

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

test("primary button contrast remains accessible in light and dark modes", () => {
  const accents = [...page.matchAll(/--accent: (#[0-9a-f]{6});/g)].map((match) => match[1]);
  const foregrounds = [...page.matchAll(/--on-accent: (#[0-9a-f]{6});/g)].map((match) => match[1]);

  assert.equal(accents.length, 2);
  assert.equal(foregrounds.length, 2);
  assert.match(page, /color: var\(--on-accent\);/);
  accents.forEach((accent, index) => {
    assert.ok(contrastRatio(accent, foregrounds[index]) >= 4.5);
  });
});
