let code = 'console.log("Hello")';
eval(code);

let value = 'console.log(1 + 1)';
eval(value);

let value1 = eval('let i = 0; ++i');
console.log(value1);

let a = 1;

function f() {
  let a = 2;

  eval('console.log(a)'); // 2
};

f();

let x = 5;
eval('x = 10');
console.log(x);

"use strict"; 

eval('let x = 5; function f() {}');

alert(typeof x); // что в строгом режиме, что без undefined странно

let f = new Function('a', 'console.log(a)');

f(5);

