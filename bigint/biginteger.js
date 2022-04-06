console.log(1n + 2n); // 3n
console.log(5n / 2n); // 2n

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number)); // 3n
console.log(Number(bigint) + number); // 3n
    
console.log(2n > 1n); // true
console.log(2n > 1); // true

console.log(1 == 1n); // true
console.log(1 === 1n); // false

if (0n) {
  console.log("nothing");
}

if (1n) {
  console.log("number");
}

console.log(1n || 2); // 1
console.log(0n || 2); // 2