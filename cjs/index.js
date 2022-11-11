'use strict';

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
]);

/**
 * Convert an integer into Khmer word.
 * @param {number} value 
 * @param {string | undefined} sep separator
 * @returns {string}
 */
function integer(value, sep = "") {
  if (Number.isNaN(value)) return '';

  // make sure it's integer
  value = Math.floor(value);

  if (value < 10) return SINGLE_DIGITS[value];
  if (value < 100) {
    const r = value % 10;
    if (r == 0) return MULTIPLE_DIGITS[Math.floor(value / 10)];
    return MULTIPLE_DIGITS[Math.floor(value / 10)] + integer(r, sep)
  }  let i = Math.floor(Math.log10(value));
  while (!SUFFIX_MAP.has(i) && i > 0) { i--; }
  const d = Math.pow(10, i);
  const pre = integer(Math.floor(value / d), sep);
  const suf = SUFFIX_MAP.get(i);
  const r = value % d;
  if (r == 0) return pre + suf;
  return pre + suf + sep + integer(r, sep);
}

/**
 * Convert an decimal into Khmer word.
 * @param {number} value 
 * @param {string | undefined} sep separator
 * @param {string | undefined} del delimiter
 * @returns {string}
 */
function decimal(value, sep = "", del = "*ក្បៀស*") {
  if (Number.isNaN(value)) return '';
  if (Number.isInteger(value)) return integer(value, sep);
  const right = value.toString().split('.')[1];
  const word = right.split('').map(char => integer(+char)).join(sep);
  return integer(Math.floor(value), sep) + del + word;
}

exports.decimal = decimal;
exports.integer = integer;
