// Create a promise ( Use setTimeout to simulate the wait )
// If promise resolves, write out Success! to the console
// If promise fails, write out Error! to the console.

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise');
  }, 3000);
});

promise
    .then(() => { return console.log('Success') })
    .catch(() => { return console.log('Error!') })
