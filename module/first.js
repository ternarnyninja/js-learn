export function hello(user) {
  console.log(`Hello ${user}`);
}

export let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const num = 123;

export class User {
  constructor(name) {
    this.name = name;
  }
}

function Car(model) {
  console.log(model);
}

function Airplane(model) {
  console.log(model);
}

export {Car, Airplane};

export function test() {
  console.log("test");
}

export function test1() {
  console.log("test1");
}

export default function() {
  console.log("Module loaded (export default)!");
}

