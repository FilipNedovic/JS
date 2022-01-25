// 1. Using the built-in `map` array function and an anonymous function, square all items in a number array

const arr = [1, 2, 3, 4, 5];

const map = arr.map(function(num) {
    return num * num;
});
// Logs [1, 4, 9, 16, 25]
console.log(map);


// 2. Write an IIFE function using an anonymous function which sums two numbers and logs the sum out to the console 

(function() {
    let num1 = 24;
    let num2 = 31;

    console.log(num1 + num2)
})();
// Logs 55


// 3. Make this function an arrow function:

// function timesTwo(number) {
//   return number * 2
// }

const timesTwo = (num => console.log(num * 2))

// Logs 34
timesTwo(17);
