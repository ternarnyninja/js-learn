let user = {
    name: "John",
  };
  
function wrap(target) {
  return new Proxy(target, {
      get(target, prop, receiver) {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        } else {
          throw new ReferenceError("error");
        }
      }
  });
}
  
user = wrap(user);

console.log(user.name); // John
console.log(user.age);

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
    prop = Number(prop) + target.length;
    }
    return Reflect.get(target, prop, receiver);
  }
});
  
console.log(array[-1]); // 3
console.log(array[-2]); // 2
console.log(array[-3]); // 1

let handlers = Symbol("handlers");

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, prop, value, receiver) {
      let success = Reflect.set(...arguments);
        if (success) {
          target[handlers].forEach(handler => handler(prop, value));
        }
        return success;
      }
  });
}
  
let user = {};

user = makeObservable(user);

user.observe((key, value) => {
  console.log(`set ${key} = ${value}`);
});

user.name = "John";
  