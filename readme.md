## Khmer word from integer 

Convert unsinged integer to Khmer word

## Installation

```
npm install khmerword
```

## Usage

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(0, "-");
// => សូន្យ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(1, "-");
// => មួយ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(2, "-");
// => ពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(3, "-");
// => បី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(4, "-");
// => បួន
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(5, "-");
// => ប្រាំ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(6, "-");
// => ប្រាំមួយ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(7, "-");
// => ប្រាំពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(8, "-");
// => ប្រាំបី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(9, "-");
// => ប្រាំបួន
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(23, "-");
// => ម្ភៃបី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(707, "-");
// => ប្រាំពីររយ-ប្រាំពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(1634, "-");
// => មួយពាន់-ប្រាំមួយរយ-សាមសិបបួន
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(10000, "-");
// => មួយម៉ឺន
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(157515, "-");
// => មួយសែន-ប្រាំម៉ឺន-ប្រាំពីរពាន់-ប្រាំរយ-ដប់ប្រាំ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(3816987, "-");
// => បីលាន-ប្រាំបីសែន-មួយម៉ឺន-ប្រាំមួយពាន់-ប្រាំបួនរយ-ប៉ែតសិបប្រាំពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(11512628, "-");
// => មួយលាន-មួយលាន-ប្រាំសែន-មួយម៉ឺន-ពីរពាន់-ប្រាំមួយរយ-ម្ភៃប្រាំបី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(484927911, "-");
// => បួនលាន-ប្រាំបីលាន-បួនលាន-ប្រាំបួនសែន-ពីរម៉ឺន-ប្រាំពីរពាន់-ប្រាំបួនរយ-ដប់មួយ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(5923631249, "-");
// => ប្រាំប៊ីលាន-ប្រាំបួនលាន-ពីរលាន-បីលាន-ប្រាំមួយសែន-បីម៉ឺន-មួយពាន់-ពីររយ-សែសិបប្រាំបួន
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(74138961608, "-");
// => ប្រាំពីរប៊ីលាន-បួនប៊ីលាន-មួយលាន-បីលាន-ប្រាំបីលាន-ប្រាំបួនសែន-ប្រាំមួយម៉ឺន-មួយពាន់-ប្រាំមួយរយ-ប្រាំបី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(432829119618, "-");
// => បួនប៊ីលាន-បីប៊ីលាន-ពីរប៊ីលាន-ប្រាំបីលាន-ពីរលាន-ប្រាំបួនលាន-មួយសែន-មួយម៉ឺន-ប្រាំបួនពាន់-ប្រាំមួយរយ-ដប់ប្រាំបី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(5065825352484, "-");
// => ប្រាំទ្រីលាន-ប្រាំមួយប៊ីលាន-ប្រាំប៊ីលាន-ប្រាំបីលាន-ពីរលាន-ប្រាំលាន-បីសែន-ប្រាំម៉ឺន-ពីរពាន់-បួនរយ-ប៉ែតសិបបួន
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(19603642625833, "-");
// => មួយទ្រីលាន-ប្រាំបួនទ្រីលាន-ប្រាំមួយប៊ីលាន-បីប៊ីលាន-ប្រាំមួយលាន-បួនលាន-ពីរលាន-ប្រាំមួយសែន-ពីរម៉ឺន-ប្រាំពាន់-ប្រាំបីរយ-សាមសិបបី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(100000000000000, "-");
// => មួយទ្រីលាន
```


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

---
>The file is generated at 2022-11-10T05:26:58.972Z