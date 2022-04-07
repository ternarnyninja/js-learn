console.log(123);

let number = 255;

console.log(number.toString(2));

console.log(0 & 0); // 0
console.log(0 & 1); // 0
console.log(1 & 0); // 0
console.log(1 & 1); // 1

console.log(0 | 0); // 0
console.log(0 | 1); // 1
console.log(1 | 0); // 1
console.log(1 | 1); // 1

console.log(0 ^ 0); // 0
console.log(0 ^ 1); // 1
console.log(1 ^ 0); // 1
console.log(1 ^ 1); // 0

~n == -(n + 1)

console.log(~0); // -1 
console.log(~1); // -2

console.log(3 << 1); // 6
console.log(3 << 2); // 12
console.log(3 << 3); // 24

console.log(100 >> 1); // 50
console.log(100 >> 2); // 25
console.log(100 >> 3); // 12

console.log(-9 >>> 2); 
console.log(-9 >> 2); // -3

console.log(~~12.345); // 12
console.log(12.345 ^ 0); // 12
console.log(12.3 * 14.5 ^ 0); // 178
console.log(1.1 + 1.2 ^ 0); // 2 

let n = 5;

if (~n) {
  console.log("n не -1");
}

let num = -1;

if (~num) {
  console.log("nothing");
}



