// Office Joke Open entry (Node 22, standard library only).
// The joke lives in joke.txt beside this file; the program copies it
// verbatim to /output/entry.txt. The gate wants UTF-8 text of 1 to 200
// characters that is not only white space, and the judge reads exactly
// the bytes copied, so no trailing line end is added or removed here:
// joke.txt ends with a newline and that newline is part of the entry.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./joke.txt', import.meta.url), join(outDir, 'entry.txt'));
