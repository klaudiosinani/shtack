declare namespace stack {
  export interface Constructor {
    new <T = any>(): Instance<T>;
  }

  export interface Instance<T> {
    readonly size: number;
    clear(): this;
    includes(value: T): boolean;
    isEmpty(): boolean;
    peek(): T | null;
    pop(): T | undefined;
    push(value: T): this;
  }
}

declare namespace shtack {
  export interface Stack<T = any> extends stack.Instance<T> {}
}

declare const shtack: {
  Stack: stack.Constructor;
};

export = shtack;
