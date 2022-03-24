// 1. task

async function loadJson(link) {
  let response = await fetch(link);
  
  if (response.status === 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

// 2. task

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
  
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}
  
async function demoGithubUser() {
  let user;
  while(true) {
    let name = prompt("login?", "iliakan");
      try {
        user = await loadJson(`blablabla${name}`);
        break; 
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          console.log("try");
        } else {
          throw err;
      }
    }
  }
  
  console.log(`full name: ${user.name}.`);
  return user;
}
  
// demoGithubUser();

// task 3

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}
  
function f() {
  wait().then(result => result);
}