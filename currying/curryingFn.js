// function curry(f) {
//   return function(a) {
//     return function(b) {
//       return f(a, b);    
//     };
//   };
// }

// function sum(a, b) {
//   return a + b;
// }

let curriedSum = curry(sum);

// debugger;

console.log(curriedSum(1)(2)); // 3

function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

// debugger;

console.log(curriedSum(1, 2, 3)); // 6
console.log(curriedSum(4)(2, 3)); // 9
console.log(curriedSum(5)(2)(3)); // 10