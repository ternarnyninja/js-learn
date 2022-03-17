let animal = {
  eats: true, 
  walk() {
    console.log("Animal walk");
  }
}

let rabbit = {
    jumps: true,
};

rabbit.__proto__ = animal;

rabbit.walk();

let car = {
  ride: true,
  drive() {
    console.log("Rrrrr");   
  }
};

let lada = {
  canFly: false,
  __proto__: car,
};

let longCar = {
  carLength: 10,
  __proto__: lada
};

longCar.drive();
console.log(longCar.canFly);
lada.drive();

console.log(Object.getOwnPropertyDescriptors(longCar.__proto__));

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" "); 
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

let admin = {
    isAdmin: true,
    __proto__: user,
};

admin.fullName = "Alice Cooper";
console.log(admin);
console.log(user);

console.log(Object.keys(admin)); 

for(let prop in admin) {
  console.log(admin[prop]);
}

