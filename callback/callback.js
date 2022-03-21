function greeting(name) {
  console.log("Hello" + name);
}

function processUserInput(callback) {
  let name = prompt("Please enter your name");
  callback(name);
}

// processUserInput(greeting);