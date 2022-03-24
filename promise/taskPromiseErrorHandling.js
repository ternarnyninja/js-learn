// Error in setTimeout

// will the catch?

new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("zopa!");
  }, 1000);
}).catch(alert);

// - no it won't work