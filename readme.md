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

const result = integerAsWord(10, "-");
// => ដប់
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(476, "-");
// => បួនរយ-ចិតសិបប្រាំមួយ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(1000, "-");
// => មួយពាន់
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(20178, "-");
// => ពីរម៉ឺន-មួយរយ-ចិតសិបប្រាំបី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(284651, "-");
// => ពីរសែន-ប្រាំបីម៉ឺន-បួនពាន់-ប្រាំមួយរយ-ហាសិបមួយ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(3238775, "-");
// => បីលាន-ពីរសែន-បីម៉ឺន-ប្រាំបីពាន់-ប្រាំពីររយ-ចិតសិបប្រាំ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(35995337, "-");
// => បីលាន-ប្រាំលាន-ប្រាំបួនសែន-ប្រាំបួនម៉ឺន-ប្រាំពាន់-បីរយ-សាមសិបប្រាំពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(330801860, "-");
// => បីលាន-បីលាន-ប្រាំបីសែន-មួយពាន់-ប្រាំបីរយ-ហុកសិប
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(3008985473, "-");
// => បីប៊ីលាន-ប្រាំបីលាន-ប្រាំបួនសែន-ប្រាំបីម៉ឺន-ប្រាំពាន់-បួនរយ-ចិតសិបបី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(26876216587, "-");
// => ពីរប៊ីលាន-ប្រាំមួយប៊ីលាន-ប្រាំបីលាន-ប្រាំពីរលាន-ប្រាំមួយលាន-ពីរសែន-មួយម៉ឺន-ប្រាំមួយពាន់-ប្រាំរយ-ប៉ែតសិបប្រាំពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(100000000000, "-");
// => មួយប៊ីលាន
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(1276551296082, "-");
// => មួយទ្រីលាន-ពីរប៊ីលាន-ប្រាំពីរប៊ីលាន-ប្រាំមួយប៊ីលាន-ប្រាំលាន-ប្រាំលាន-មួយលាន-ពីរសែន-ប្រាំបួនម៉ឺន-ប្រាំមួយពាន់-ប៉ែតសិបពីរ
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(7977809706923, "-");
// => ប្រាំពីរទ្រីលាន-ប្រាំបួនប៊ីលាន-ប្រាំពីរប៊ីលាន-ប្រាំពីរប៊ីលាន-ប្រាំបីលាន-ប្រាំបួនលាន-ប្រាំពីរសែន-ប្រាំមួយពាន់-ប្រាំបួនរយ-ម្ភៃបី
```

```js
import { integerAsWord } from "khmerword";

const result = integerAsWord(285846892168938, "-");
// => ពីរទ្រីលាន-ប្រាំបីទ្រីលាន-ប្រាំទ្រីលាន-ប្រាំបីប៊ីលាន-បួនប៊ីលាន-ប្រាំមួយប៊ីលាន-ប្រាំបីលាន-ប្រាំបួនលាន-ពីរលាន-មួយសែន-ប្រាំមួយម៉ឺន-ប្រាំបីពាន់-ប្រាំបួនរយ-សាមសិបប្រាំបី
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
>The file is generated at 2022-11-10T05:23:19.939Z