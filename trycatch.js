"use strict";

// try {
//     // console.log("test"); 

//     // console.log("test1");
// } catch(err) {
//     // console.log("catch is ignored");
// }

// try {
//     // console.log("test");

//     lollol; // error, variable is not defined

//     // console.log("123"); // end of try never reached
// } catch(err) {
//     // console.log("error"); // error
//     // console.log(err);
// }

// try {
//     {{{{ // this syntactically wrong
// } catch(err) { // SyntaxError
//     console.log("test");
// }
    
// try {
//     setTimeout(function() {
//         noSuchVariable; // will fall here
//     }, 1000);
// } catch (e) {
//     console.log("not anything");
// }

// setTimeout(function() {
//     try {
//         noSuchVariable;
//     } catch (e) {
//         console.log("error caught");
//         console.log(e);
//     }
// }, 1000);

// try {
//     lalala; // error, variable is not defined
// } catch (err) {
//     // console.log(err.name);
//     // console.log(err.message);
//     // console.log(err.stack);

//     // console.log(err);
// }

// let json = '{"name":"John", "age": 30}';

// let user = JSON.parse(json); 
// // console.log(user.name); // John
// // console.log(user.age); // 30

// let newJson = "{ incorrect JSON}";

// try {
//   let user = JSON.parse(newJson); // error here
//   // console.log(user.name);
// } catch(err) {
//   // console.log("Sorry, there is an error in the data, we will try to get it again");
//   // console.log(err.name);
//   // console.log(err.message);
// }

// let data = '{ "age": 30 }'; 

// try {
//   let user = JSON.parse(data); // all fine
//   console.log(user.name); // undefined // no property name 
// } catch(err) {
//   console.log("nothing");
// }

// JSON.parse run without problems, but the absence of the name 
// property is a mistake for us.

// let error = new Error("John");
// console.log(error.name);
// console.log(error.message);
// console.log(error.stack);

// try {
//   JSON.parse("{ bad json o_O }");
// } catch(err) {
//   console.log(err.name); // SyntaxError
//   console.log(err.message); // Unexpected token b in JSON at position 2
// }

// let dataJson = '{ "age": 30 }'; // properties are incomplete

// try {
//   let user = JSON.parse(dataJson);

//   if (!user.name) {
//     throw new SyntaxError("Propetries are incomplete: no name");
//   }

//   console.log(user.name);
// } catch (err) {
//   console.log("JSON Error:" + err.message);
// }

let json = '{ "age": 30 }'; // данные неполны
let error;

try {
  user = JSON.parse(json); // <-- забыл добавить "let" перед user

  // ...
} catch(err) {
  error = "JSON Error: " + err; // JSON Error: ReferenceError: user is not defined
  // (не JSON ошибка на самом деле)
}

// console.log(error);


// Error only in "strict mode"
// outside "strict mode" variable "user" will be in the global object

function setExeption(json) {
  let error;
  
  try {
    user = JSON.parse(json); // variable initialization
    console.log(user);
  } catch (err) {
    error = "JSON Error" + err; // JSON Error: ReferenceError: user is not defined
  }

  return error;
}

// console.log(setExeption(json));

// setExeption(json);

function getErrors(str) {
  try {
    let user = JSON.parse(str);

    if (!user.name) {
      throw new SyntaxError("properties are incomplete: not name");
    }

    blabla(); // unexpected error

    console.log(user.name);

  } catch(err) {

    if (err.name == "SyntaxError") {
      console.log("JSON Error: " + err.message);
    } else {
      throw err;
    }
  }
}

// let result = getErrors(json);

function readData() {
  let json = '{ "age": 30 }';

  try {
    blabla(); // error
  } catch (err) {
    if (err.name != "SyntaxError") {
      throw err;
    }
  }
}

// try {
//   readData();
// } catch (err) {
//   console.log( "outside catch caught" + err);
// }

function tryCatchFinally() {
  try {
    console.log("try");
    if (confirm("generate error")) LOL(); // if "yes" try -> catch -> finally. else try -> finally.
  } catch (err) {
    console.log("catch");
  } finally {
    console.log("finally");
  }
} 

// tryCatchFinally();

// let num = +prompt("enter a positive integer number", 35);

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("must be a non-negative ingeter");
  }
  return n <= 2 ? n : fib(n - 1) + fib(n - 2);
}

// let start = Date.now();

// try {
//   result = fib(num);
// } catch (e) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// }

// console.log(result || "error");
// console.log(`lead time ${diff}`);

function finallyReturn() {

  try {
    return 1;
  } catch (err) {
    // ...
  } finally {
    console.log("finally");
  }
}

// console.log(finallyReturn()); // 1. finally 2. return 1;

function tryFinally() {
  // any qualities
  try {
    // ...
  } finally {
    // complete it even if everything falls down
  }
}

// error always pops up

// Task

function test() {
  try {
    // console.log("start");
    return "result";
  } catch (e) {
    
  } finally {
    // console.log("clear"); 
  }
}

// test();

function test1() {
  try {
    // console.log('start');
    throw new Error("Error");
  } catch (e) {
    // ...
    if("can`t handle error") {
      throw e;
    }

  } finally {
    // console.log('clear')
  }
}

// test1();