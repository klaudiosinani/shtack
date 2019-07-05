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
```

## Development

For more info on how to contribute to the project, please read the [contributing guidelines](https://github.com/klaussinani/shtack/blob/master/contributing.md).

- Fork the repository and clone it to your machine
- Navigate to your local fork: `cd shtack`
- Install the project dependencies: `npm install` or `yarn install`
- Lint the code and run the tests: `npm test` or `yarn test`

## Related

- [binstree](https://github.com/klaussinani/binstree) - Binary search trees for ES6
- [doublie](https://github.com/klaussinani/doublie) - Doubly circular & linear linked lists for ES6
- [mheap](https://github.com/klaussinani/mheap) - Binary min & max heaps for ES6
- [prioqueue](https://github.com/klaussinani/prioqueue) - Priority queues for ES6
- [singlie](https://github.com/klaussinani/singlie) - Singly circular & linear linked lists for ES6

## Team

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)

## License

[MIT](https://github.com/klaussinani/shtack/blob/master/license.md)
