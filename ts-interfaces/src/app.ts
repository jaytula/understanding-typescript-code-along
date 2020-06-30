interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => a + b;

class Person implements Greetable {
  name?: string;
  age: number = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log('Hi');
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'asdf';  // error because set to readonly in Greetable interface

user1.greet("Hi there - I am");
console.log(user1);
