let promiseChain = new Promise((resolve, reject) => {

  setTimeout(() => resolve(1), 1000); // complete in 1 second

}).then(result => { // called 
    
  console.log(result); // 1
  return result * 2;

}).then(result => { 

  console.log(result); // 2
  return result * 2;

}).then(result => {
    
  console.log(result); // 4
  return result * 2;

});

let returnPromise = new Promise((resolve, reject) => {

  setTimeout(() => resolve(1), 1000);

}).then(result => { // can return Promise

  console.log(result); // 1

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
});

}).then(result => { 

  console.log(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(result => {

  console.log(result); // 4

});

function loadJson(url) {
  return fetch(url).then(response => response.json());
};

function loadInfo(name) {
  return loadJson(`testForTest ${name}`);
}

function showInfo(user) {
  return new Promise((resolve, reject) => {
    let comment = document.createElement("p");
    comment.src = user.text
    comment.className = "promise-comment-expample";
    document.body.append(comment);

    setTimeout(() => {
      comment.remove();
      resolve(user);
    }, 5000);
  });
}

loadJson("hmmmm")
  .then(name => loadInfo(name))
  .then(showComment)
  .then(user => alert(`${user}`))
  // ...


// tasks 

promise.then(f1).catch(f2);

// if .then(f1) have error it will be processed

promise.then(f1, f2);

// the error occurs along the chain, 
// if there is no continuation of the chain,
//  then the error will not be processed