// One Word, One Username, One Reward — entry for
// u-rusdyxbt-one-word-one-username-one-reward-1a191fae.
//
// The whole entry is a single word: the entrant's own make.fun handle.
// This program writes that one word to /output/entry.txt, nothing more.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = "daring-tapir-83";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY, "utf8");
