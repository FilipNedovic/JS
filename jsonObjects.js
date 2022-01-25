// Create a JS person object which contains firstName, lastName and age.

let person = {
    firstName: 'Filip',
    lastName: 'Nedovic',
    age: 31
}


// Create that same object but in JSON format

let personJson = '{"person": {"firstName": "Filip", "lastName": "Nedovic", "age": 31}}'


// Use JSON.parse to convert the second object to a JS object

console.log(JSON.parse(personJson));


// Use JSON.stringify to convert the first object to a JSON object

console.log(JSON.stringify(person));


// Create a JS array of numbers

let numbers = [1, 2, 3, 4, 5, 6];


// Create a JSON array of numbers

let numbersJson = "[1, 2, 3, 4, 5, 6]"


// Convert the second array to a JS array and loop over it.

JSON.parse(numbersJson).forEach(member => console.log(member));
