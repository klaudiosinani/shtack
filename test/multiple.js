'use strict';
const test = require('ava');
const {Stack} = require('../.');

test('push', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  t.is(stack._head.value, 60);
  t.is(stack._head.next.value, 50);
  t.is(stack._head.next.next.value, 40);
  t.is(stack._head.next.next.next.value, 30);
  t.is(stack._head.next.next.next.next.value, 20);
  t.is(stack._head.next.next.next.next.next.value, 10);
  t.is(stack._head.next.next.next.next.next.next, null);
});

test('size', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  t.is(stack.size, 6);
});

test('clear', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  t.deepEqual(stack.clear(), stack);
  t.deepEqual(stack, new Stack());
  t.is(stack._head, null);
});

test('duplicate', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60)
    .duplicate();
  t.is(stack._head.value, 60);
  t.is(stack._head.next.value, 60);
  t.is(stack._head.next.next.value, 50);
  t.is(stack._head.next.next.next.value, 40);
  t.is(stack._head.next.next.next.next.value, 30);
  t.is(stack._head.next.next.next.next.next.value, 20);
  t.is(stack._head.next.next.next.next.next.next.value, 10);
  t.is(stack._head.next.next.next.next.next.next.next, null);
  t.is(stack.size, 7);
});

test('forEach', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  const array = [];
  t.deepEqual(stack.forEach(x => array.push(x)), stack);
  t.deepEqual(array, [60, 50, 40, 30, 20, 10]);
});

test('includes', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  t.true(stack.includes(10));
  t.false(stack.includes(80));
});

test('isEmpty', t => {
  const stack = new Stack();
  t.true(stack.isEmpty());
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  t.false(stack.isEmpty());
});

test('peek', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  t.is(stack.peek(), 60);
});

test('pop', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  t.is(stack.pop(), 60);
  t.is(stack.pop(), 50);
  t.is(stack.pop(), 40);
  t.is(stack.pop(), 30);
  t.is(stack.pop(), 20);
  t.is(stack.pop(), 10);
  t.is(stack.pop(), undefined);
});

test('reverse', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60)
    .reverse();
  t.is(stack._head.value, 10);
  t.is(stack._head.next.value, 20);
  t.is(stack._head.next.next.value, 30);
  t.is(stack._head.next.next.next.value, 40);
  t.is(stack._head.next.next.next.next.value, 50);
  t.is(stack._head.next.next.next.next.next.value, 60);
  t.is(stack._head.next.next.next.next.next.next, null);
});

test('rotateLeft', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  t.deepEqual(stack.rotateLeft(-1), stack);
  t.deepEqual(stack.rotateLeft(0), stack);
  t.deepEqual(stack.rotateLeft(6), stack);
  t.deepEqual(stack.rotateLeft(7), stack);
  stack.rotateLeft(4);
  t.is(stack._head.value, 40);
  t.is(stack._head.next.value, 30);
  t.is(stack._head.next.next.value, 20);
  t.is(stack._head.next.next.next.value, 10);
  t.is(stack._head.next.next.next.next.value, 60);
  t.is(stack._head.next.next.next.next.next.value, 50);
  t.is(stack._head.next.next.next.next.next.next, null);
});

test('rotateRight', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  t.deepEqual(stack.rotateRight(-1), stack);
  t.deepEqual(stack.rotateRight(0), stack);
  t.deepEqual(stack.rotateRight(6), stack);
  t.deepEqual(stack.rotateRight(7), stack);
  stack.rotateRight(4);
  t.is(stack._head.value, 20);
  t.is(stack._head.next.value, 10);
  t.is(stack._head.next.next.value, 60);
  t.is(stack._head.next.next.next.value, 50);
  t.is(stack._head.next.next.next.next.value, 40);
  t.is(stack._head.next.next.next.next.next.value, 30);
  t.is(stack._head.next.next.next.next.next.next, null);
});

test('swap', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60)
    .swap();
  t.is(stack._head.value, 50);
  t.is(stack._head.next.value, 60);
  t.is(stack._head.next.next.value, 40);
  t.is(stack._head.next.next.next.value, 30);
  t.is(stack._head.next.next.next.next.value, 20);
  t.is(stack._head.next.next.next.next.next.value, 10);
  t.is(stack._head.next.next.next.next.next.next, null);
  t.is(stack.size, 6);
});

test('toArray', t => {
  const stack = new Stack();
  stack
    .push(10)
    .push(20)
    .push(30)
    .push(40)
    .push(50)
    .push(60);
  t.deepEqual(stack.toArray(), [60, 50, 40, 30, 20, 10]);
});
