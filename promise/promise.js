let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 1000); 
});

promise.then(
    result => console.log(result), // "done"
    error => console.log(error)
);

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops")), 1000);
});

promise1.then(
    result => console.log(result),
    error => console.log(error)
);

let promise2 = new Promise(resolve => {
    setTimeout(() => resolve("done"), 1000);
});

promise2.then(alert);

// if we only need to handle the error 
// can use .then(null, errorHandlingFunction) 
// or .catch(errorHandlingFunction)

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Error")), 1000);
});

promise3.then(null, alert);
promise3.catch(alert);

// "use strict";

let promise5 = new Promise((resolve, reject) => {
    throw new Error("error");
});

promise5.finally(() => alert("Promise completed"));
promise5.catch(err => alert(err));

let promise6 = new Promise(resolve => resolve("ready"));

promise6.then(alert);


function loadScriptCallback(src, callback) {
  let script = document.createElement("script");
  script.srt = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Error load script ${src}`));

  document.head.append(script);
}

function loadScriptPromise(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Error load script ${src}`));

    document.head.append(script);
  })
}

let loadScript = loadScriptPromise("testScript");

loadScript.then(
  script => console.log(`${script.src} loaded`),
  error => console.log(`Error: ${error.message}`)
);

loadScript.then(script => console.log(`One more handler`));

// tasks

let promiseTask = new Promise((resolve, reject) => {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promiseTask.then(alert); // 1
promiseTask.then(alert); // 1

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("done in 3 seconds"));

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

console.log(promise);

function start() {
  renderCircle(150, 150, 100).then(div => {
    div.classList.add('message-circle');
    div.append("rofl!");
  });
}

function renderCircle(x, y, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = x + 'px';
  div.style.top = y + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend',(handler) => {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  })
}