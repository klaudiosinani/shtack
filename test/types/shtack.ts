import { Stack } from '../..';

const stack = new Stack<number>();
//=> Stack { head: null, size: 0 }

stack.isEmpty();
//=> true

stack.push(10);
//=> Stack { head: Item { value: 10, next: null }, size: 1 }

stack.isEmpty();
//=> false

stack.peek();
//=> 10

stack
  .push(20)
  .push(30)
  .push(40)
  .push(50);
//=> Stack { head:
// Item { value: 50, next:
// Item { value: 40, next:
// Item { value: 30, next:
// Item { value: 20, next:
// Item { value: 10, next: null } } } } }, size: 5 }

stack.includes(30);
//=> true

stack.includes(60);
//=> false

stack.pop();
//=> 50

stack.peek();
//=> 40

stack.toArray();
//=> [ 40, 30, 20, 10 ]

stack.rotateRight(3);
//=> Stack { head:
// Item { value: 10, next:
// Item { value: 40, next:
// Item { value: 30, next:
// Item { value: 20, next: null } } } }, size: 4 }

stack.toArray();
//=> [ 10, 40, 30, 20 ]

stack.rotateLeft(1);
//=> Stack { head:
// Item { value: 20, next:
// Item { value: 10, next:
// Item { value: 40, next:
// Item { value: 30, next: null } } } }, size: 4 }

stack.toArray();
//=> [ 20, 10, 40, 30 ]

stack
  .swap()
  .duplicate()
  .toArray();
//=> [ 10, 10, 20, 40, 30 ]

stack.reverse().toArray();
//=> [30, 40, 20, 10, 10]
