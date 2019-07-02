'use strict';

class Stack {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  clear() {
    this._head = null;
    this._size = 0;
    return this;
  }

  isEmpty() {
    return this._size === 0;
  }
}

module.exports = Stack;
