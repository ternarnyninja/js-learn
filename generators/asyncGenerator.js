let range = {
    from: 1,
    to: 5,
  
    [Symbol.asyncIterator]() { // (1)
      return {
        current: this.from,
        last: this.to,
  
        async next() { // (2)
  
          await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
      }
    };
  }
};
  
(async () => {

  for await (let value of range) { // (4)
    console.log(value); // 1,2,3,4,5
  }

})()

function* generationFrom(start, end) {
  for(let i = start;i <= end;i++) {
    yield i;
  }
}

for(let value of generationFrom(1, 5)) {
  console.log(value);
}

async function* asyncGenerationFrom(start, end) {
  for(let i = start;i <= end;i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }
}

(async () => {
  let generator = asyncGenerationFrom(1, 5);
  for await (let value of generator) {
    console.log(value);
  }
})();