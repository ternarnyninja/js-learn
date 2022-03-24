"use strict";

const stealsTryCatchPromise = new Promise((resolve, reject) => {
  throw new Error("Error");
}).catch(result => console.log(result));

// same things 

new Promise((resolve, reject) => {
  reject(new Error("Error"));
}).catch(result => console.log(result));

const catchErrorHandlerPromise = new Promise((resolve, reject) => {
  resolve("zopa");
}).then((result) => {
  throw new Error("Error"); // error generation
}).catch(result => console.log(result));

// this happens for all errors, not just those caused by the operator "throw"

new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  blablabla(); 
}).catch(result => console.log(result)); // ReferenceError: blabla is not defined

