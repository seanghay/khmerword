import fs from 'fs'
import { integerAsWord } from './index.js'

let snippet = `// DO NOT EDIT.\n`;


const l = (strings, ...values) => {
  const v = String.raw({ raw: strings }, ...values);
  snippet += v + "\n"
}

const createSnippet = (n, rnd, result) => {
  l`test("${n}. value ${rnd}", t => t.deepEqual(integerAsWord(${rnd}), ${JSON.stringify(result)}))`;
}

l`import test from 'ava';`
l`import { integerAsWord } from './index.js'`


const uniq = new Set();

for (let i = 0; i < 10; i++) createSnippet(0, i, integerAsWord(i))

for (let i = 1; i <= 20; i++) {
  const min = Math.pow(10, i);
  const max = min * (Math.floor(Math.random() * 10))
  for (let n = 0; n < 1000; n++) {
    const rnd = Math.floor((max - min) * Math.random()) + min
    if (uniq.has(rnd)) continue;
    
    uniq.add(rnd);
    const result = integerAsWord(rnd);
    createSnippet(n, rnd, result);
  }
}

fs.writeFileSync('index.test.js', snippet, 'utf-8');