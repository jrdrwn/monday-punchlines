// "Monday Morning Punchlines" — one joke about Monday mornings.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "My alarm rang at 6:00 a.m. ";
const SNOOZE = "I hit snooze. It came back at 6:09: ";
const PUNCH = "'You cannot snooze a Monday.'";

const LINE = SETUP + SNOOZE + PUNCH;

// The gate reads exactly this file; no trailing newline, so the
// character count is the line itself and nothing else.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
