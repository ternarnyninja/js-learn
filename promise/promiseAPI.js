const urls = [
    "blablabla",
    "blablabla",
    "blablabla",
];

// // convert each URL to Promise
const requests = urls.map(url => fetch(url));

// // Promise.all waith completed all Promises
Promise.all(requests)
  .then(responses => responses.forEach(
      response => console.log(response.url)
    ));

// if any of promises is rejected, the promise returned by Promise.all immediately rejects with
// that error

// Promise.allSettled

// Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

// {status:"fulfilled", value:result} for successful responses,
// {status:"rejected", reason:error} for errors.

let promise = Promise.race(iterable);

// "use strict";

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(result => console.log(result)); // 1