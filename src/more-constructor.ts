export {};

class Person {
  constructor(public name: string, protected age: number){
  }
}

const me = new Person('tom', 50);
console.log(me);
