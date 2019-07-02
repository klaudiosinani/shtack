'use strict';

class Item {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get next() {
    return this._next;
  }

  set next(item) {
    this._next = item;
  }
}

module.exports = Item;
