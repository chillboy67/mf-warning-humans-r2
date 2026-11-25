// mf-warning-humans-r2 — a warning label for humans, one line, big laugh.
// Contents: one human. Side effects: dreams, dog-video tears, snacks.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const label =
  "WARNING: Contains one human. May talk about their dreams, cry at dog videos, and require snacks every three hours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

writeFileSync(join(outDir, "entry.txt"), label + "\n", "utf8");
// Handle with care: the human inside needs snacks every three hours.
console.log(label);
