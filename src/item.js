'use strict';

class Item {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }
}

module.exports = Item;
