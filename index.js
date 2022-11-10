// heavily inspired/copied from https://github.com/vh13294/number-to-khmer-word
const SINGLE_DIGITS = ['សូន្យ', 'មួយ', 'ពីរ', 'បី', 'បួន', 'ប្រាំ', 'ប្រាំមួយ', 'ប្រាំពីរ', 'ប្រាំបី', 'ប្រាំបួន'];
const MULTIPLE_DIGITS = ['', 'ដប់', 'ម្ភៃ', 'សាមសិប', 'សែសិប', 'ហាសិប', 'ហុកសិប', 'ចិតសិប', 'ប៉ែតសិប', 'កៅសិប'];
const SUFFIX_MAP = new Map([
  [2, 'រយ'],
  [3, 'ពាន់'],
  [4, 'ម៉ឺន'],
  [5, 'សែន'],
  [6, 'លាន'],
  [9, 'ប៊ីលាន'],
  [12, 'ទ្រីលាន'],
])

/**
 * Convert an integer into Khmer word.
 * @param {number} value 
 * @param {string | undefined} sep 
 * @returns {string}
 */
export function integerAsWord(value, sep = "") {
  if (value < 10) return SINGLE_DIGITS[value];
  if (value < 100) {
    const r = value % 10;
    if (r == 0) return MULTIPLE_DIGITS[~~(value / 10)];
    return MULTIPLE_DIGITS[Math.floor(value / 10)] + integerAsWord(r, sep)
  };
  let i = Math.floor(Math.log10(value));
  const d = Math.pow(10, i);
  while (!SUFFIX_MAP.has(i) && i > 0) { i--; }
  const pre = SINGLE_DIGITS[Math.floor(value / d)];
  const suf = SUFFIX_MAP.get(i);
  const r = value % d;
  if (r == 0) return pre + suf;
  return pre + suf + sep + integerAsWord(r, sep);
}