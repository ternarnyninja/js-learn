let target = {};

let proxy = new Proxy(target, {});

proxy.test = 5;
console.log(target.test); // 5
console.log(proxy.test); // 5

for(let key in proxy) {
  console.log(key);
}

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return "Нет такого элемента";
    }
  }
});

console.log(numbers[1]); // 1
console.log(numbers[123]); // Нет такого элемента

let dictionary = {
  "Hello": "Hola",
  "Bye": "Adios"
};

console.log(dictionary["Hello"]); // Hola
console.log(dictionary["Welcome"]); // undefined

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    if (phrase in target) {
      return target[phrase];
    } else {
      return phrase;
    }
  }
});

console.log(dictionary["Hello"]); // Hola
console.log(dictionary["Welcome to Proxy"]); // Welcome to Proxy

let numbers = [];

numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if (typeof val === "number") {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});


numbers.push(1);
numbers.push(2);
console.log(numbers.length); // 2

numbers.push("test");

let user = {
  name: "John",
  age: 30,
  _password: "***",
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith("_"));
  }
});

for(let key in user) {
  console.log(key); // name, age
};

console.log(Object.keys(user)); // name, age
console.log(Object.values(user)); // John, 30

let obj = {};

obj = new Proxy(obj, {
  ownKeys(target) {
    return ["a", "b", "c"];
  }
});

console.log(Object.keys(obj)); 

let object = {};

object = new Proxy(object, {
  ownKeys(target) {
    return ["a", "b", "c"];
  },

  getOwnPropertyDescriptor(target, prop) {
    return {
      enumerable: true,
      configurable: true
    };
  }

});

console.log(Object.keys(object)); // a, b, c

let user = {
  name: "John",
  _password: "secret",
};

console.log(user._password); // secret

user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("access denied");
    } else {
      let value = target[prop];
      return (typeof value === "function") ? value.bing(target) : value;
    }
  }, 
  
  set(target, prop, val) {
    if (prop.startsWith("_")) {
      throw new Error("access denied");
    } else {
      target[prop] = val;
      return true;
    }
  },

  deleteProperty(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("access denied");
    } else {
      delete target[prop];
      return true;
    }
  },

  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith("_"));
  }

});

try {
  console.log(user._password); // access denied
} catch (err) {
  console.log(err); 
}

try {
  user._password = "test"; // access denied
} catch (err) {
  console.log(err);
}

try {
  delete user._password; // access denied
} catch (err) {
  console.log(err);
}

for(let key in user) {
  console.log(key); // name
}

let range = {
  start: 1,
  end: 10,
};

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  }
});

console.log(5 in range); // true
console.log(50 in range); // false

function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

sayHi("John");

function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}

function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

console.log(sayHi.length);

sayHi("John");

let user = {
  name: "John",
};

user = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);
  },

  set(target, prop, val, receiver) {
    console.log(`SET ${prop} = ${val}`);
    return Reflect.set(target, prop, val, receiver);
  }
});

let name = user.name // 
user.name = "Alice";

console.log(user);

let user = {
  _name: "Guest",
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return target[prop];
  }
});

console.log(userProxy.name); // Guest