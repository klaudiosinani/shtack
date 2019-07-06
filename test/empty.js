'use strict';
const test = require('ava');
const {Stack} = require('../.');

const stack = new Stack();

test('size', t => {
  t.is(stack.size, 0);
});

test('clear', t => {
  t.deepEqual(stack.clear(), stack);
  t.deepEqual(stack.clear(), new Stack());
  t.is(stack.peek(), undefined);
});

test('duplicate', t => {
  t.deepEqual(stack.duplicate(), stack);
  t.deepEqual(stack.duplicate(), new Stack());
  t.is(stack.peek(), undefined);
});

test('forEach', t => {
  const array = [];
  t.deepEqual(stack.forEach(x => array.push(x)), stack);
  t.deepEqual(array, []);
});

test('includes', t => {
  t.false(stack.includes(10));
});

test('isEmpty', t => {
  t.true(stack.isEmpty());
});

test('peek', t => {
  t.is(stack.peek(), undefined);
});

test('pop', t => {
  t.is(stack.pop(), undefined);
});

test('reverse', t => {
  t.deepEqual(stack.reverse(), stack);
});

test('rotateLeft', t => {
  t.deepEqual(stack.rotateLeft(-1), stack);
  t.deepEqual(stack.rotateLeft(0), stack);
  t.deepEqual(stack.rotateLeft(1), stack);
});

test('rotateRight', t => {
  t.deepEqual(stack.rotateRight(-1), stack);
  t.deepEqual(stack.rotateRight(0), stack);
  t.deepEqual(stack.rotateRight(1), stack);
});

test('swap', t => {
  t.deepEqual(stack.swap(), stack);
});

test('toArray', t => {
  t.deepEqual(stack.toArray(), []);
});
