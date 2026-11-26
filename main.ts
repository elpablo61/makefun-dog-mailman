// The Dog Reviews the Mailman — one funny one-line review a dog gives the mailman.
// The program writes the review to /output/entry.txt (the gate reads it:
// UTF-8 text, 1-200 characters) and prints it to stdout for the log.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Review of Mr. Hartono: punctual, smells of paper, runs well. Loses one star for never throwing the ball. I threw it at him once. He left.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
console.log(review);
