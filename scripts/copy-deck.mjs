#!/usr/bin/env node
/**
 * Round-trips every visible string between content.ts and a markdown deck.
 *
 *   node scripts/copy-deck.mjs export   content.ts -> docs/portfolio-copy-deck.md
 *   node scripts/copy-deck.mjs import   docs/portfolio-copy-deck.md -> content.ts
 *
 * The deck is the editing surface; content.ts stays the source the site reads.
 * Import rewrites only the string literals whose text changed, so comments,
 * structure and formatting in content.ts survive untouched.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = resolve(root, "app/_portfolio/content.ts");
const SECTION_LABELS = {
  work: "주요 작업 · Selected Work",
  projects: "프로젝트 · Project Index",
  experience: "경험 · Experience",
  research: "연구 · Research",
  about: "소개 · How I Work",
};
const DECK = resolve(root, "docs/portfolio-copy-deck.md");

const isLocalized = (v) =>
  v && typeof v === "object" && !Array.isArray(v) &&
  typeof v.en === "string" && typeof v.ko === "string" &&
  Object.keys(v).length === 2;

/** Every localized pair in the tree, in source order, keyed by its path. */
function collect(node, path = "", out = []) {
  if (isLocalized(node)) {
    out.push({ key: path, en: node.en, ko: node.ko });
    return out;
  }
  if (Array.isArray(node)) {
    node.forEach((child, i) => collect(child, `${path}[${i}]`, out));
    return out;
  }
  if (node && typeof node === "object") {
    for (const [k, child] of Object.entries(node)) {
      collect(child, path ? `${path}.${k}` : k, out);
    }
  }
  return out;
}

/** A readable heading for a group of keys, so the deck is navigable. */
function sectionFor(key) {
  if (key.startsWith("profile")) return "프로필 · Profile";
  if (key.startsWith("site.headline")) return "헤드라인 · Headline";
  if (key.startsWith("site.")) return "사이트 공통 · Site chrome";
  if (key.startsWith("navigation")) return "사이트 공통 · Site chrome";
  if (key.startsWith("featured")) {
    const n = Number(key.match(/^featured\[(\d+)\]/)[1]) + 1;
    return `주요 작업 ${String(n).padStart(2, "0")} · Selected work ${n}`;
  }
  if (key.startsWith("projects")) return "프로젝트 · Project index";
  if (key.startsWith("experience")) return "경험 · Experience";
  if (key.startsWith("research")) return "연구 · Research";
  if (key.startsWith("publications")) return "논문 · Publications";
  if (key.startsWith("skills")) return "기술 · Skills";
  return "그 외 · Other";
}

/** Escape a string the way the TypeScript source writes it. */
function asLiteral(text) {
  return `"${text.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

async function loadContent() {
  const mod = await import(`${CONTENT}?t=${Date.now()}`);
  return mod.portfolioContent;
}

async function doExport() {
  const entries = collect(await loadContent());
  const lines = [
    "# 포트폴리오 카피 덱",
    "",
    "`app/_portfolio/content.ts`의 모든 노출 문구입니다. 여기서 고치고",
    "`node scripts/copy-deck.mjs import`를 돌리면 사이트에 그대로 들어갑니다.",
    "",
    "**규칙**",
    "",
    "- `**EN**` / `**KO**` 줄의 `—` 뒤 텍스트만 고칠 것",
    "- 백틱으로 감싼 키(`featured[0].title`)는 건드리지 말 것 — 되돌릴 자리를 잃습니다",
    "- 한 줄로 쓸 것. 줄바꿈은 무시됩니다",
    "- `{count}` 같은 중괄호 자리표시자는 그대로 둘 것",
    "- 항목 하나를 통째로 빼려면 덱이 아니라 `content.ts`의 배열에서 지울 것",
    "",
    "---",
    "",
  ];

  const shown = (await loadContent()).sections;
  lines.push("## 섹션 표시 · Sections", "");
  lines.push("체크를 지우면 그 섹션이 페이지와 메뉴에서 사라집니다. 문구는 그대로 남습니다.", "");
  for (const [id, label] of Object.entries(SECTION_LABELS)) {
    lines.push(`- [${shown[id] ? "x" : " "}] \`${id}\` — ${label}`);
  }
  lines.push("", "---", "");

  let section = null;
  for (const entry of entries) {
    const next = sectionFor(entry.key);
    if (next !== section) {
      section = next;
      lines.push(`## ${section}`, "");
    }
    lines.push(`### \`${entry.key}\``, "");
    lines.push(`- **EN** — ${entry.en}`);
    lines.push(`- **KO** — ${entry.ko}`);
    lines.push("");
  }

  writeFileSync(DECK, lines.join("\n"), "utf8");
  console.log(`exported ${entries.length} strings -> docs/portfolio-copy-deck.md`);
}

function parseSections() {
  const shown = {};
  for (const raw of readFileSync(DECK, "utf8").split("\n")) {
    const line = raw.match(/^- \[([ xX])\] `([a-z]+)` —/);
    if (line) shown[line[2]] = line[1].toLowerCase() === "x";
  }
  return shown;
}

function parseDeck() {
  const parsed = new Map();
  let key = null;
  for (const raw of readFileSync(DECK, "utf8").split("\n")) {
    const heading = raw.match(/^### `(.+)`\s*$/);
    if (heading) {
      key = heading[1];
      parsed.set(key, {});
      continue;
    }
    const line = raw.match(/^- \*\*(EN|KO)\*\* — (.*)$/);
    if (line && key) parsed.get(key)[line[1].toLowerCase()] = line[2].trim();
  }
  return parsed;
}

async function doImport() {
  const entries = collect(await loadContent());
  const deck = parseDeck();
  let source = readFileSync(CONTENT, "utf8");

  const sections = parseSections();
  const expectedIds = Object.keys(SECTION_LABELS);
  const gotIds = expectedIds.filter((id) => id in sections);
  if (gotIds.length !== expectedIds.length) {
    console.error(
      `the section checklist is missing ${expectedIds.filter((id) => !(id in sections)).join(", ")}`,
    );
    console.error("re-export before importing, or restore the missing lines");
    process.exit(1);
  }
  if (!expectedIds.some((id) => sections[id])) {
    console.error("every section is unchecked; the page would be a hero and a footer only");
    process.exit(1);
  }

  const current = (await loadContent()).sections;
  const sectionChanged = expectedIds.filter((id) => sections[id] !== current[id]);

  const changes = [];
  const missing = [];
  for (const entry of entries) {
    const edited = deck.get(entry.key);
    if (!edited || edited.en === undefined || edited.ko === undefined) {
      missing.push(entry.key);
      continue;
    }
    if (edited.en !== entry.en || edited.ko !== entry.ko) changes.push({ ...entry, edited });
  }

  if (missing.length) {
    console.error(`deck is missing ${missing.length} keys, e.g. ${missing.slice(0, 3).join(", ")}`);
    console.error("re-export before importing, or restore the missing headings");
    process.exit(1);
  }
  if (!changes.length && !sectionChanged.length) {
    console.log("no changes in the deck");
    return;
  }

  if (sectionChanged.length) {
    const body = expectedIds.map((id) => `    ${id}: ${sections[id]},`).join("\n");
    const block = /( {2}sections: \{\n)[\s\S]*?(\n {2}\},)/;
    if (!block.test(source)) {
      console.error("could not find the sections block in content.ts");
      process.exit(1);
    }
    source = source.replace(block, `$1${body}$2`);
    for (const id of sectionChanged) {
      console.log(`  section ${id}: ${current[id]} -> ${sections[id]}`);
    }
  }

  const failed = [];
  for (const change of changes) {
    // Rewrite the pair, not a bare string: two strings together are far more
    // likely to be unique than either one alone.
    const oldPair = `copy(${asLiteral(change.en)}, ${asLiteral(change.ko)})`;
    const newPair = `copy(${asLiteral(change.edited.en)}, ${asLiteral(change.edited.ko)})`;
    const spread = new RegExp(
      `copy\\(\\s*${escapeRe(asLiteral(change.en))},\\s*${escapeRe(asLiteral(change.ko))},?\\s*\\)`,
    );

    if (source.includes(oldPair)) {
      if (source.indexOf(oldPair) !== source.lastIndexOf(oldPair)) {
        failed.push(`${change.key}: text appears more than once in content.ts`);
        continue;
      }
      source = source.replace(oldPair, newPair);
    } else if (spread.test(source)) {
      const hits = source.match(new RegExp(spread.source, "g")) ?? [];
      if (hits.length > 1) {
        failed.push(`${change.key}: text appears more than once in content.ts`);
        continue;
      }
      source = source.replace(spread, newPair);
    } else {
      failed.push(`${change.key}: could not find the current text in content.ts`);
      continue;
    }
    console.log(`  ${change.key}`);
  }

  if (failed.length) {
    console.error(`\n${failed.length} string(s) not applied:`);
    for (const line of failed) console.error(`  ${line}`);
    console.error("\nnothing was written; fix the deck or edit content.ts directly");
    process.exit(1);
  }

  writeFileSync(CONTENT, source, "utf8");
  const total = changes.length + sectionChanged.length;
  console.log(`\napplied ${total} change(s) -> app/_portfolio/content.ts`);
}

function escapeRe(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const mode = process.argv[2];
if (mode === "export") await doExport();
else if (mode === "import") await doImport();
else {
  console.error("usage: node scripts/copy-deck.mjs export|import");
  process.exit(1);
}
