let promise = Promise.resolve();

promise.then(() => alert("promise complete"));

alert("code complete"); // first alert

let promise1 = Promise.reject(new Error("Error in promise"));
promise1.catch(err => alert("caught"));

// won`t start, error handled
window.addEventListener("unhandledrejection", event => {
    alert(event.reason);
});

let promise3 = Promise.reject(new Error("Error in promise"));

// Error in promise
window.addEventListener("unhandledrejection", event => {
    alert(event.reason);
});

let promise = Promise.reject(new Error("Error in promise"));

setTimeout(() => promise.catch(err => alert("caught")), 1000);

// Error in promise
window.addEventListener("unhandledrejection", event => {
    alert(event.reason);
});