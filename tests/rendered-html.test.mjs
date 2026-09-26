import assert from "node:assert/strict";
import test from "node:test";
import { portfolioContent } from "../app/_portfolio/content.ts";

/** Copy is edited in content.ts, so the expectations are read from there. */
const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** React escapes quotes and ampersands on the way out; compare against plain text. */
const decode = (html) =>
  html
    .replace(/&(?:#x27|#39|apos);/gi, "'")
    .replace(/&(?:quot|#34);/gi, '"')
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&");

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete English portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = decode(await response.text());
  const { profile, site, featured, projects } = portfolioContent;

  assert.match(html, /<title>Chan-ho Seo · Robotics Sensor Engineer<\/title>/i);

  const headline = [site.headline.line1, site.headline.line2, site.headline.line3]
    .map((line) => escape(line.en))
    .join("[\\s\\S]*");
  assert.match(html, new RegExp(headline, "i"));

  // Sections switched off in content.ts render nothing, so they are not expected.
  const titles = [
    ...(portfolioContent.sections.work ? featured : []),
    ...(portfolioContent.sections.projects ? projects : []),
  ].map((entry) => entry.title.en);
  assert.ok(titles.length > 0, "content.ts lists no visible work to render");
  for (const title of titles) {
    assert.match(html, new RegExp(escape(title)));
  }

  assert.match(html, new RegExp(escape(profile.email)));
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.doesNotMatch(html, /react-loading-skeleton|Building your site/);
});

test("keeps the server-rendered public surface free of internal identifiers", async () => {
  const response = await render();
  const html = await response.text();
  for (const pattern of [
    /ServiQ/i,
    /Carti Carrier/i,
    /CLOiD/i,
    /LG Innotek/i,
    /Wanlida|WLD/i,
    /Coin D4A/i,
    /Jira/i,
    /\b(?:ATK|PS|ESE|RS|SBRS)-\d+\b/i,
    /bearrobotics\//i,
  ]) {
    assert.doesNotMatch(html, pattern);
  }
});
