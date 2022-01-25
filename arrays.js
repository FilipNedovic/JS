// - Create an array of colours
// - Loop through the array using the `for` loop and log the colour to the console
// - Loop through the array using the `forEach` loop and log the colour to the console

const colours = ['red', 'grey', 'green', 'blue', 'yellow', 'pink'];

for(let i = 0; i < colours.length; i++) {
    console.log(colours[i]);
}

colours.forEach(el => console.log(el))

// 1. Write a function that will rotate an array to the right by a certain number of "steps".




// 2. Write a function that uses the native Array .reduce method to sum up an array of numbers, but starting at 50. 

const numbers = [2, 4, 6, 8, 10];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

//Logs 80
console.log(50 + numbers.reduce(reducer))


// 3. Create a function that takes a number as an argument and returns an array. 
// The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. 
// Then, each element should count back down to 0. 

const addElements = (num => {
    let arr = [];

    for(let i = 0; i < num; i++) {
        arr.push(i);
    }

    return arr.reverse();
});

// Logs [6, 5, 4, 3, 2, 1, 0]
console.log(addElements(7));


// 4. Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) 
// and returns an array of strings that describe each animal's name, species, and age.

// INPUT: zooInventory(myZoo);
// OUTPUT: 
// [
//   'King Kong the gorilla is 42', 
//   'Nemo the fish is 5',
//   'Punzsutawney Phil the groundhog is 11'
// ]

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

  const zooInventory = (arr => {
    let animals = [];

    arr.forEach(member => {
      animal = `${member[0]} the ${member[1][0]} is ${member[1][1]}`
      animals.push(animal);
    });
  
    return animals;
});

// Logs ["King Kong the gorilla is 42", "Nemo the fish is 5", "Punxsutawney Phil the groundhog is 11"]
console.log(zooInventory(myZoo));
