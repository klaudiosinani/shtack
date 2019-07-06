<h1 align="center">
  Shtack
</h1>

<h4 align="center">
  Stacks for ES6
</h4>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/shtack">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/shtack.svg?branch=master">
  </a>
  <a href='https://coveralls.io/github/klaussinani/shtack?branch=master'>
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/klaussinani/shtack/badge.svg?branch=master">
  </a>
</p>

## Description

ES6 implementation of the stack data structure with TypeScript support.

Come over to [Twitter](https://twitter.com/klaussinani) to share your thoughts on the project.

Visit the [contributing guidelines](https://github.com/klaussinani/shtack/blob/master/contributing.md#translating-documentation) to learn more on how to translate this document into more languages.

## Contents

- [Description](#description)
- [Install](#install)
- [In Depth](#in-depth)
- [Usage](#usage)
- [API](#api)
- [Development](#development)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Install

### Yarn

```bash
yarn add shtack
```

### NPM

```bash
npm install shtack
```

## In Depth

A stack is an data structure that serves as a collection of elements, with two principal operations:

- `push` which adds an element to the collection, and
- `pop` which removes the most recently added element that was not yet removed.

Additionally, a `peek` operation gives access to the top element without mutating the stack. The order in which elements come off a stack gives rise to its alternative name, `LIFO` which stands for last in, first out. Shtack stacks are implemented using a linear singly linked list as their backbone, since stacks are linear data structures, or more abstractly sequential collections, where the `push` and `pop` operations occur only at one end of the structure, referred to as the `top` of the stack, which internally corresponds to the `head` node of the singly linked list.

## Usage

Shtack exposes a chainable API, that can be utilized through a simple and minimal syntax, allowing you to combine methods effectively.

Usage examples can be also found at the [`test`](https://github.com/klaussinani/shtack/tree/master/test) directory.

```js
'use strict';
const {Stack} = require('shtack');

const stack = new Stack();
//=> Stack { head: null, size: 0 }

stack.isEmpty();
//=> true

stack.push(10);
//=> Stack { head: Item { value: 10, next: null }, size: 1 }

stack.isEmpty();
//=> false

stack.peek();
//=> 10

stack
  .push(20)
  .push(30)
  .push(40)
  .push(50);
//=> Stack { head:
// Item { value: 50, next:
// Item { value: 40, next:
// Item { value: 30, next:
// Item { value: 20, next: 
// Item { value: 10, next: null } } } } }, size: 5 }

stack.includes(30);
//=> true

stack.includes(60);
//=> false

stack.pop();
//=> 50

stack.peek();
//=> 40

stack.toArray();
//=> [ 40, 30, 20, 10 ]

stack.rotateRight(3);
//=> Stack { head:
// Item { value: 10, next:
// Item { value: 40, next:
// Item { value: 30, next:
// Item { value: 20, next: null } } } }, size: 4 }

stack.toArray();
//=> [ 10, 40, 30, 20 ]

stack.rotateLeft(1);
//=> Stack { head:
// Item { value: 20, next:
// Item { value: 10, next:
// Item { value: 40, next:
// Item { value: 30, next: null } } } }, size: 4 }

stack.toArray();
//=> [ 20, 10, 40, 30 ]

stack
  .swap()
  .duplicate()
  .toArray();
//=> [ 10, 10, 20, 40, 30 ]

stack.reverse().toArray();
//=> [30, 40, 20, 10, 10]
```

## API

#### stack.`size`

- Return Type: `Number`

Returns the total number of values in the stack.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack
  .push(10)
  .push(20)
  .push(30);
//=> Stack { head:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } }, size: 3 }
stack.size;
//=> 3
```

#### stack.`clear()`

- Return Type: `Stack`

Mutates the stack by removing all residing values and returns it empty.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack
  .push(10)
  .push(20)
  .push(30);
//=> Stack { head:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } }, size: 3 }
stack.size;
//=> 3
stack.clear();
//=> Stack { head: null, size: 0 }
stack.size;
//=> 0
```

#### stack.`duplicate()`

- Return Type: `Stack`

Mutates the stack by removing the top-most value, and then pushing it twice, so that an additional copy of the former top-most value is now on the top, with the original below it. Returns the stack itself.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack
  .push(10)
  .push(20)
  .push(30);
//=> Stack { head:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } }, size: 3 }
stack.duplicate();
//=> Stack { head:
// Item { value: 30, next:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } } }, size: 4 }
```

#### stack.`forEach(fn)`

- Return Type: `Stack`

Traverses the stack, top to bottom, and executes the provided `fn` function once for each traversed element without mutating the stack. Returns the stack itself at the end of the traversal.

##### **`fn`**

- Type: `Function`

Unary function to execute for each traversed value.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack
  .push(10)
  .push(20)
  .push(30)
  .push(40);
//=> Stack { head:
// Item { value: 40, next:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } } }, size: 4 }
stack.forEach(console.log);
//=> 40
// 30
// 20
// 10
```

#### stack.`includes(value)`

- Return Type: `Boolean`

Determines whether the stack includes a certain value, returning `true` or `false` as appropriate.

##### **`value`**

- Type: `Any`

Value to search for.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack
  .push(10)
  .push(20)
  .push(30);
//=> Stack { head:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } }, size: 3 }
stack.includes(10);
//=> true
stack.includes(40);
//=> false
stack.includes(20);
//=> true
```

#### stack.`isEmpty()`

- Return Type: `Boolean`

Determines whether the stack is empty, returning `true` or `false` as appropriate.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack.push(10);
//=> Stack { head: Item { value: 10, next: null }, size: 1 }
stack.isEmpty();
//=> false
stack.clear().isEmpty();
//=> true
```

#### stack.`peek()`

- Return Type: `Any | undefined`

Returns the top-most value of the stack, without mutating the stack itself.
If the stack is empty `undefined` is returned.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack.push(10);
//=> Stack { head: Item { value: 10, next: null }, size: 1 }
stack.peek();
//=> 10
```

#### stack.`pop()`

- Return Type: `Any | undefined`

Mutates the stack by removing and returning the top-most value.
If the stack is empty `undefined` is returned.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack.push(10);
//=> Stack { head: Item { value: 10, next: null }, size: 1 }
stack.pop();
//=> 10
stack.pop();
//=> undefined
```

#### stack.`push(value)`

- Return Type: `Stack`

Mutates the stack by inserting a new value at the top. Returns the stack itself.

##### **`value`**

- Type: `Any`

Value to insert.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack.push(10);
//=> Stack { head: Item { value: 10, next: null }, size: 1 }
stack.push(20).push(30);
//=> Stack { head:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } }, size: 3 }
stack.size;
//=> 3
```

#### stack.`reverse()`

- Return Type: `Stack`

Mutates the stack by reversing in-place the contained values. The top-most value becomes the bottom-most one, and the bottom-most one becomes the top-most. Returns the stack itself.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack
  .push(10)
  .push(20)
  .push(30);
//=> Stack { head:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } }, size: 3 }
stack.reverse();
//=> Stack { head:
// Item { value: 10, next:
// Item { value: 20, next:
// Item { value: 30, next: null } } }, size: 3 }
```

#### stack.`rotateLeft(n)`

- Return Type: `Stack`

Mutates the stack by moving the `n` bottom-most values to the top in a rotating fashion. Returns the stack itself.

##### **`n`**

- Type: `Number`

Number of bottom-most values to be rotated.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack
  .push(10)
  .push(20)
  .push(30)
  .push(40)
  .push(50);
//=> Stack { head:
// Item { value: 50, next:
// Item { value: 40, next:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } } } }, size: 5 }
stack.toArray();
//=> [ 50, 40, 30, 20, 10 ]
stack.rotateLeft(2);
//=> Stack { head:
// Item { value: 20, next:
// Item { value: 10, next:
// Item { value: 50, next:
// Item { value: 40, next:
// Item { value: 30, next: null } } } } }, size: 5 }
stack.toArray();
//=> [ 20, 10, 50, 40, 30 ]
```

#### stack.`rotateRight(n)`

- Return Type: `Stack`

Mutates the stack by moving the `n` top-most values to the bottom in a rotating fashion. Returns the stack itself.

##### **`n`**

- Type: `Number`

Number of top-most values to be rotated.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack
  .push(10)
  .push(20)
  .push(30)
  .push(40)
  .push(50);
//=> Stack { head:
// Item { value: 50, next:
// Item { value: 40, next:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } } } }, size: 5 }
stack.toArray();
//=> [ 50, 40, 30, 20, 10 ]
stack.rotateRight(2);
//=> Stack { head:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next:
// Item { value: 50, next:
// Item { value: 40, next: null } } } } }, size: 5 }
stack.toArray();
//=> [ 30, 20, 10, 50, 40 ]
```

#### stack.`swap()`

- Return Type: `Stack`

Mutates the stack by exchanging the positions of the two top-most values. Returns the stack itself.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack
  .push(10)
  .push(20)
  .push(30);
//=> Stack { head:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } }, size: 3 }
stack.toArray();
//=> [ 30, 20, 10 ]
stack.swap();
//=> Stack { head:
// Item { value: 20, next:
// Item { value: 30, next:
// Item { value: 10, next: null } } }, size: 3 }
stack.toArray();
//=> [ 20, 30, 10 ]
```

#### stack.`toArray()`

- Return Type: `Array<Any>`

Traverses the stack, from top to bottom, and stores each traversed value in an array. The array is returned at the end of the traversal.

```js
const {Stack} = require('shtack');

const stack = new Stack();

stack
  .push(10)
  .push(20)
  .push(30)
  .push(40)
  .push(50);
//=> Stack { head:
// Item { value: 50, next:
// Item { value: 40, next:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } } } }, size: 5 }
stack.toArray();
//=> [ 50, 40, 30, 20, 10 ]
```

## Development

For more info on how to contribute to the project, please read the [contributing guidelines](https://github.com/klaussinani/shtack/blob/master/contributing.md).

- Fork the repository and clone it to your machine
- Navigate to your local fork: `cd shtack`
- Install the project dependencies: `npm install` or `yarn install`
- Lint the code and run the tests: `npm test` or `yarn test`

## Related

- [avlbinstree](https://github.com/klaussinani/avlbinstree) - AVL self-balancing binary search trees for ES6
- [binstree](https://github.com/klaussinani/binstree) - Binary search trees for ES6
- [doublie](https://github.com/klaussinani/doublie) - Doubly circular & linear linked lists for ES6
- [mheap](https://github.com/klaussinani/mheap) - Binary min & max heaps for ES6
- [prioqueue](https://github.com/klaussinani/prioqueue) - Priority queues for ES6
- [singlie](https://github.com/klaussinani/singlie) - Singly circular & linear linked lists for ES6

## Team

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)

## License

[MIT](https://github.com/klaussinani/shtack/blob/master/license.md)
