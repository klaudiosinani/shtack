'use strict';
const Item = require('./item');

class Stack {
  constructor() {
    this._head = null;
    this._last = null;
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  clear() {
    this._head = null;
    this._last = null;
    this._size = 0;
    return this;
  }

  forEach(fn) {
    let {_head: item} = this;

    while (item) {
      fn(item.value);
      item = item.next;
    }

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
    return !this._head && this._size === 0;
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

    if (!_head) {
      this._last = item;
    }

    item.next = _head;
    this._head = item;
    this._size += 1;
    return this;
  }

  reverse() {
    let {_head: current} = this;

    if (current) {
      let prev = null;

      while (current) {
        const {next} = current;
        current.next = prev;
        prev = current;
        current = next;
      }

      this._head = prev;
    }

    return this;
  }

  swap() {
    if (this.size >= 2) {
      const {next: snd} = this._head;
      this._head.next = snd.next;
      snd.next = this._head;
      this._head = snd;
    }

    return this;
  }

  toArray() {
    const array = [];
    this.forEach(x => array.push(x));
    return array;
  }
}

module.exports = Stack;
