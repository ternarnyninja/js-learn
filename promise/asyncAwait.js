// async - always returns Promise

async function returnPromise() {
  return 1;
};

returnPromise().then(result => console.log(result));

// same things 

async function returnPromise2() {
  return Promise.resolve(1);
}

returnPromise2().then(result => console.log(result));

// Await 

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("ready"), 1000)
    });

    let result = await promise; // will wait until the promise is fulfilled

    console.log(result);
}

f();

function f2() {
    let promise = Promise.resolve(1);
    let result = await promise; // SyntaxError
}

// replace the .then calls with await .
// add the async keyword before the function declaration.

async function showAvatar() {
  
  let response = await fetch("url");
  let user = await response.json();

  let githubResponse = await fetch("url/user");
  let githubUser = await githubResponse.json();

  let img = document.createElement("img");
  // ...

  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

// error handler

async function test() {
  await Promise.reject(new Error("Whoops!"));
}

// same things

async function test2() {
  throw new Error("Whoops!");
}

async function tryCatch() {
  try {
    let response = await fetch("hmmm");
  } catch(err) {
    console.log(err); // TypeError: failed to fetch
  }
}

// tryCatch();