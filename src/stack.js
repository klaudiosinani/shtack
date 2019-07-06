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

  _rotate(n) {
    if (n > 0 && n < this.size) {
      let count = n;
      let {_head: current} = this;

      while (count > 1) {
        current = current.next;
        count -= 1;
      }

      const nth = current;

      while (current.next) {
        current = current.next;
      }

      current.next = this._head;
      this._head = nth.next;
      nth.next = null;
    }

    return this;
  }

  clear() {
    this._head = null;
    this._size = 0;
    return this;
  }

  duplicate() {
    const {_head} = this;

    if (_head) {
      const value = this.pop();
      this.push(value);
      this.push(value);
    }

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

  rotateLeft(n) {
    return this._rotate(this.size - n);
  }

  rotateRight(n) {
    return this._rotate(n);
  }

  swap() {
    if (this.size >= 2) {
      const {next} = this._head;
      this._head.next = next.next;
      next.next = this._head;
      this._head = next;
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
