import fs from 'node:fs';
import { integerAsWord } from './index.mjs'

let mk = `## Khmer word from integer \n\n`;

const createSnippet = (rnd, result) => {
  const snippet = `const result = integerAsWord(${rnd});\n // => ${result}`;
  mk += "```js\n" + snippet + "\n```" + "\n\n"
}


for (let i = 0; i < 10; i++) createSnippet(i, integerAsWord(i))

for (let i = 1; i <= 14; i++) {
  const min = Math.pow(10, i);
  const max = min * (Math.floor(Math.random() * 10))
  const rnd = Math.floor((max - min) * Math.random()) + min
  const result = integerAsWord(rnd)
  createSnippet(rnd, result);
}

mk += '> this file is generated at ' + new Date().toISOString()

fs.writeFileSync('readme.md', mk, 'utf-8');
