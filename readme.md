## Khmer word from integer 

Convert unsinged integer to Khmer word

## Installation

```
npm install khmerword
```

## Usage

```js
import { integer, decimal } from 'khmerword'

const result = integer(5246111515165, "-");
// => ប្រាំទ្រីលាន-ពីររយ-សែសិបប្រាំមួយប៊ីលាន-មួយរយ-ដប់មួយលាន-ប្រាំសែន-មួយម៉ឺន-ប្រាំពាន់-មួយរយ-ហុកសិបប្រាំ

const result = decimal(1234.1234, "-");
// => មួយពាន់-ពីររយ-សាមសិបបួន*ក្បៀស*មួយ-ពីរ-បី-បួន
```


## Related

- [vh13294/number-to-khmer-word](https://github.com/vh13294/number-to-khmer-word)

## License

```
MIT License

Copyright (c) 2022 Seanghay Yath

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```