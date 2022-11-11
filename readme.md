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

const result = integerAsWord(18, "-");
// => ដប់ប្រាំបី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(7, "-");
// => ប្រាំពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(259, "-");
// => ពីររយ-ហាសិបប្រាំបួន
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(60062, "-");
// => ប្រាំមួយម៉ឺន-ហុកសិបពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(323535, "-");
// => បីសែន-ពីរម៉ឺន-បីពាន់-ប្រាំរយ-សាមសិបប្រាំ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(4175401, "-");
// => បួនលាន-មួយសែន-ប្រាំពីរម៉ឺន-ប្រាំពាន់-បួនរយ-មួយ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(36366013, "-");
// => សាមសិបប្រាំមួយលាន-បីសែន-ប្រាំមួយម៉ឺន-ប្រាំមួយពាន់-ដប់បី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(102395755, "-");
// => មួយរយ-ពីរលាន-បីសែន-ប្រាំបួនម៉ឺន-ប្រាំពាន់-ប្រាំពីររយ-ហាសិបប្រាំ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(6233997667, "-");
// => ប្រាំមួយប៊ីលាន-ពីររយ-សាមសិបបីលាន-ប្រាំបួនសែន-ប្រាំបួនម៉ឺន-ប្រាំពីរពាន់-ប្រាំមួយរយ-ហុកសិបប្រាំពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(48264398229, "-");
// => សែសិបប្រាំបីប៊ីលាន-ពីររយ-ហុកសិបបួនលាន-បីសែន-ប្រាំបួនម៉ឺន-ប្រាំបីពាន់-ពីររយ-ម្ភៃប្រាំបួន
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(204487715062, "-");
// => ពីររយ-បួនប៊ីលាន-បួនរយ-ប៉ែតសិបប្រាំពីរលាន-ប្រាំពីរសែន-មួយម៉ឺន-ប្រាំពាន់-ហុកសិបពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(4723816039121, "-");
// => បួនទ្រីលាន-ប្រាំពីររយ-ម្ភៃបីប៊ីលាន-ប្រាំបីរយ-ដប់ប្រាំមួយលាន-បីម៉ឺន-ប្រាំបួនពាន់-មួយរយ-ម្ភៃមួយ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(10000000000000, "-");
// => ដប់ទ្រីលាន
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(294015802420052, "-");
// => ពីររយ-កៅសិបបួនទ្រីលាន-ដប់ប្រាំប៊ីលាន-ប្រាំបីរយ-ពីរលាន-បួនសែន-ពីរម៉ឺន-ហាសិបពីរ
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
>The file is generated at 2022-11-11T04:06:56.670Z