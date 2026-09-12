import assert from "node:assert/strict";
import test from "node:test";

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

  const html = await response.text();
  assert.match(html, /<title>Chan-ho Seo · Robotics Sensor Engineer<\/title>/i);
  assert.match(html, /RIGHT PLACE[\s\S]*RIGHT TIME[\s\S]*TRUSTED DATA/i);
  assert.match(html, /Stabilizing a Low-Cost LiDAR for Reliable Navigation/);
  assert.match(html, /Rebuilding the Time Axis for Better SLAM/);
  assert.match(html, /Giving Camera and IMU One Shared Clock/);
  assert.match(html, /Automating Sensor Calibration for a New Industrial AMR/);
  assert.match(html, /Turning Camera Inspection Disputes into a Measurement System/);
  assert.match(html, /Sensor Stack for a New Compact Service Robot/);
  assert.match(html, /Humanoid Sensor-System Bring-up/);
  assert.match(html, /Camera Calibration from Pedestrians/);
  assert.match(html, /Multi-Object Tracking with a 2D LiDAR/);
  assert.match(html, /studychanho0717@gmail\.com/);
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
