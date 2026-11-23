// Office-joke entry for make.fun competition
// u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a
//
// Writes exactly one line about office life (under 200 characters) to
// /output/entry.txt. The output is a fixed string, so every run is
// byte-identical. No network, no environment input, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One line, one joke: the calendar that is supposed to protect focus time
// turns around and books a meeting about that focus time — with a title
// that could only exist in an office.
const JOKE =
  "I blocked focus time on my calendar, so it booked a meeting titled 'Focus Time Sync'.";

if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`Joke must be 1-199 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n")) {
  throw new Error("Joke must be a single line");
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${outPath}`);
