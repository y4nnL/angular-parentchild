[![Build Status](https://travis-ci.org/y4nnL/angular-arithmetic.svg?branch=master)](https://travis-ci.org/y4nnL/angular-arithmetic)
# Install
You can install this package with `npm`
```sh
$ npm install angular-arithmetic
```
Then add `arithmetic` as a dependency for your application:
```javascript
import arithmetic from 'angular-arithmetic';

angular.module('myApplication', [arithmetic]);
```
Or as a `<script>` tag into your `index.html` file:
```html
<script src="node_modules/angular-arithmetic/build/angular-arithmetic.es5.js"></script>
```
# Documentation
This module exposes a `arithmetic` service available for dependency injection with the following methods
```javascript
// Add n1 to n2
arithmetic.add(n1:number, n2:number):number

// Subtract n2 from n1
arithmetic.subtract(n1:number, n2:number):number

// Multiply n1 by n2
arithmetic.multiply(n1:number, n2:number):number

// Divide n1 by n2
arithmetic.divide(n1:number, n2:number):number
```
# License
ISC License

Copyright (c) 2017, Yann LOJEWSKI

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.