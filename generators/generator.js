function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
};

let generator = generateSequence();
console.log(generator); // [object Generator];

// generators have methond next()
// result method next() 
// object with two properties 
// {value: value from yield: dode: true / false }

// try to get first value from generator

let one = generator.next();
let two = generator.next();
let three = generator.next();

console.log(one); // {value: 1, done: false};
console.log(two); // {value: 2, done: false};
console.log(three); // {value: 3, done: true};

function* generatorEnumeration() {
  yield 1;
  yield 2;
  return 3;   
};

let generatorEnum = generatorEnumeration();

for(let prop of generatorEnum) {
    console.log(prop); // 1, 2 
}

// for..of ignores the last value but "done: true"
// if we need last value, should be used "yield"

function* generatorRest() {
  yield 1;
  yield 2;
  yield 3;
}

let sequence = [0, ...generatorRest()];

console.log(sequence); // 0, 1, 2, 3

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator] () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++};
        } else {
          return { done: true };
        }
      }
    };
  }
};

console.log([...range]); // 1, 2, 3, 4, 5

// we can use function-generator to iterate 

let generationRange = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
}

console.log([...generationRange]); // 1, 2, 3, 4, 5

// generator with composition

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
  
function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);
//for(let i = 97;i <= 122;i++) yield i;

  // A..Z
  yield* generateSequence(65, 90);
//for(let i = 97;i <= 122;i++) yield i;
  
  // a..z
  yield* generateSequence(97, 122);
//for(let i = 97;i <= 122;i++) yield i;

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z

function* gen() {
  let result = yield "2 + 2 = ?" 

  console.log(result);
}

let generator1 = gen();

let question = generator1.next().value

generator1.next(4);

function* gen2() {
  let ask1 = yield "2 + 2 = ?";

  console.log(ask1); // 4

  let ask2 = yield "3 * 3 = ?";

  console.log(ask2); // 9
}

let generator2 = gen2();

console.log(generator2.next().value);
console.log(generator2.next(4).value);
console.log(generator2.next(9).done);

// generator.throw

function* genThrow() {
  try {
    let result = yield "2 + 2 = ?";

    console.log("nothing");
  } catch(err) {
    console.log(err); 
  }
}

let gen1 = genThrow();

let question1 = gen1.next().value;

gen1.throw(new Error("no property"));

function* generateThrow() {
  let reslut = yield "2 + 2 = ?";
}

let gen3 = generateThrow();

let question2 = gen3.next().value;

try {
  gen3.throw(new Error("no property"));
} catch(err) {
  console.log(err);
}
