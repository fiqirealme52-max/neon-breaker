// Neon Breaker — entry for the make.fun bounty "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709).
//
// The entry is the X post itself: a short video of an AI coding agent building the
// Neon Breaker browser game from one prompt. This program does exactly one job — it
// copies POST.json from the repository root to /output/POST.json, where the gate
// reads the post's address. Nothing this program writes about the post is scored;
// the house reads the post itself from X.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// `out/POST.json` is then byte for byte this directory's POST.json.
//
// Node 22, standard library only.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const POST_FILE = "POST.json";

function fail(message) {
  console.error(`neon-breaker: ${message}`);
  process.exit(1);
}

const source = join(BOT_DIR, POST_FILE);

// Refuse a placeholder or unreadable post file early, with a readable error,
// instead of copying something the gate would reject as valid 0.
let parsed;
try {
  parsed = JSON.parse(readFileSync(source, "utf8"));
} catch (err) {
  fail(`could not read ${source} as JSON: ${err.message}`);
}
if (!parsed || typeof parsed.url !== "string" || !parsed.url.startsWith("https://")) {
  fail(`${POST_FILE} must hold {"url": "https://x.com/<handle>/status/<id>"}`);
}
// The gate only accepts a real X post address (x.com or twitter.com, digits id).
const POST_URL = /^(https:\/\/)(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+\/?$/;
if (!POST_URL.test(parsed.url)) {
  fail(`${POST_FILE} url is not an X post address: ${parsed.url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, join(OUTPUT_DIR, POST_FILE));
} catch (err) {
  fail(`could not copy ${source} to ${OUTPUT_DIR}: ${err.message}`);
}
console.log(`neon-breaker: copied ${POST_FILE} to ${OUTPUT_DIR}`);
