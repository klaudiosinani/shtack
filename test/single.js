'use strict';
const test = require('ava');
const {Stack} = require('../.');

test('push', t => {
  const stack = new Stack();
  stack.push(10);
  t.is(stack._head.value, 10);
  t.is(stack._head.next, null);
});

test('size', t => {
  const stack = new Stack();
  stack.push(10);
  t.is(stack.size, 1);
});

test('clear', t => {
  const stack = new Stack();
  stack.push(10);
  t.deepEqual(stack.clear(), stack);
  t.deepEqual(stack.clear(), new Stack());
  t.is(stack.peek(), undefined);
});

test('duplicate', t => {
  const stack = new Stack();
  stack.push(10).duplicate();
  t.is(stack._head.value, 10);
  t.is(stack._head.next.value, 10);
  t.is(stack._head.next.next, null);
});

test('forEach', t => {
  const stack = new Stack();
  stack.push(10);
  const array = [];
  t.deepEqual(stack.forEach(x => array.push(x)), stack);
  t.deepEqual(array, [10]);
});

test('includes', t => {
  const stack = new Stack();
  stack.push(10);
  t.true(stack.includes(10));
  t.false(stack.includes(20));
});

test('isEmpty', t => {
  const stack = new Stack();
  t.true(stack.isEmpty());
  stack.push(10);
  t.false(stack.isEmpty());
});

test('peek', t => {
  const stack = new Stack();
  stack.push(10);
  t.is(stack.peek(), 10);
});

test('pop', t => {
  const stack = new Stack();
  stack.push(10);
  t.is(stack.pop(), 10);
  t.is(stack.pop(), undefined);
});

test('reverse', t => {
  const stack = new Stack();
  stack.push(10);
  t.deepEqual(stack.reverse(), stack);
  t.is(stack._head.value, 10);
  t.is(stack._head.next, null);
});

test('rotateLeft', t => {
  const stack = new Stack();
  stack.push(10);
  t.deepEqual(stack.rotateLeft(-1), stack);
  t.is(stack._head.value, 10);
  t.is(stack._head.next, null);
  t.deepEqual(stack.rotateLeft(0), stack);
  t.is(stack._head.value, 10);
  t.is(stack._head.next, null);
  t.deepEqual(stack.rotateLeft(1), stack);
  t.is(stack._head.value, 10);
  t.is(stack._head.next, null);
});

test('rotateRight', t => {
  const stack = new Stack();
  stack.push(10);
  t.deepEqual(stack.rotateRight(-1), stack);
  t.is(stack._head.value, 10);
  t.is(stack._head.next, null);
  t.deepEqual(stack.rotateRight(0), stack);
  t.is(stack._head.value, 10);
  t.is(stack._head.next, null);
  t.deepEqual(stack.rotateRight(1), stack);
  t.is(stack._head.value, 10);
  t.is(stack._head.next, null);
});

test('swap', t => {
  const stack = new Stack();
  stack.push(10);
  t.deepEqual(stack.swap(), stack);
  t.is(stack._head.value, 10);
  t.is(stack._head.next, null);
});

test('toArray', t => {
  const stack = new Stack();
  stack.push(10);
  t.deepEqual(stack.toArray(), [10]);
});
