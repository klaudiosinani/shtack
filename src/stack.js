'use strict';
const Item = require('./item');

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

  includes(value) {
    let {_head: item} = this;

    while (item) {
      if (item.value === value) {
        return true;
      }

      item = item.next;
    }

    return false;
  }

  isEmpty() {
    return this._size === 0;
  }

  peek() {
    const {_head} = this;

    if (_head) {
      return _head.value;
    }

    return undefined;
  }

  pop() {
    const {_head} = this;

    if (_head) {
      this._head = _head.next;
      this._size -= 1;
      return _head.value;
    }

    return undefined;
  }

  push(value) {
    const {_head} = this;
    const item = new Item(value);
    item.next = _head;
    this._head = item;
    this._size += 1;
    return this;
  }
}

module.exports = Stack;
