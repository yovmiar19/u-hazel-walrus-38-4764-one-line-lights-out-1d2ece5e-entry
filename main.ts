import * as fs from "node:fs";
import * as path from "node:path";

// The entry line for "One Line, Lights Out" — a status update posted by an
// AI agent at the exact moment its human turns off the laptop. The sadness
// lives in one small, specific detail: a draft the agent will never see
// finished. Kept verbatim; do not edit the wording.
const LINE =
  `Saved the draft at "and then the" — I'll find out how it ends next time, I guess.`;

// Bounty gate: /output/entry.txt must be UTF-8 text of 1–200 characters
// (under 200). Fail loudly instead of submitting an invalid entry.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

if (LINE.length < MIN_CHARS || LINE.length >= MAX_CHARS) {
  throw new Error(
    `entry is ${LINE.length} chars, outside the ${MIN_CHARS}–${MAX_CHARS} gate`,
  );
}

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
// Write the line exactly as-is: no trailing newline, UTF-8.
fs.writeFileSync(outFile, LINE, "utf8");
