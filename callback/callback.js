function greeting(name) {
  console.log("Hello" + name);
}

function processUserInput(callback) {
  let name = prompt("Please enter your name");
  callback(name);
}

// processUserInput(greeting);

// task

// Callback

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  start();
})

function start() {
  renderCircle(150, 150, 100, div => {
    div.classList.add('message-circle');
    div.append("hmmm");
  });
}

function renderCircle(x, y, radius, callback) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = x + 'px';
  div.style.top = y + 'px';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';

    div.addEventListener('transitionend', (handler) => { // transitionend срабатывает когда CSS transition закончил свое выполнение
      div.removeEventListener('transitionend', handler);
      callback(div);
    });
  });
}



