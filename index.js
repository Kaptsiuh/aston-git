class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}!`);
  }

  sayGoodbye() {
    console.log(`See you soon, ${this.name}!`);
  }
}

const people = [
  new Person("Dima"),
  new Person("Kris"),
  new Person("Alex"),
  new Person("John"),
  new Person("Bob"),
  new Person("Mike"),
];

people.forEach((p) => {
  p.sayHello();
  p.sayGoodbye();
});
