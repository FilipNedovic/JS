// 1. `let` and `const` vs. `var`

// VAR 

// var global scoped
var a = 5;

function fGlobal() {
    console.log(a);
}
// logs 5
fGlobal();
// logs 5
console.log(a);


// var function scoped
function f() {
    var a = 10;
    console.log(a);
}
// logs 10
f();

// throws redference error, not accessible outside function
console.log(a);


// var can be redeclared and/or updated
var a = 11;
// logs 11
console.log(a);

var a = 9
// logs 9
console.log(a);

a = 7
//logs 7
console.log(a);


// LET

// let block scoped
let a = 12;

function fBlock() {
    let b = 10;
    console.log(a);
    console.log(b);
}
// logs 12 10
fBlock();

// throws reference error, not accessible outside function block
console.log(b);

function f() {
    if (true) {
        let b = 9;
        console.log(b);
    }
    // throws reference error, not accessible outside function block
    console.log(b);
}
f();


// let can't be re-declared but can be updated
let a = 10;

// returns syntax error, identifier 'a' has already been declared
let a = 10;

a = 11;
// logs 11
console.log(a);


// CONST

// shares same properties as let, but cannot be updated
const a = 4;

function fUpdate() {
    a = 3;
    // throws type error, assignment to constant variable
    console.log(a);
}
fUpdate();


// const object
const obj = {
    prop1: 10,
    prop2: 9
}

// allowed
obj.prop1 = 5;
// not allowed
obj = {
    c: 11,
    prop2: 9
}


// 2. ES6 classes vs. class functions

// ES6 class
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Class function
var Shape = function(id, x, y) {
    this.id = id;
    this.move(x, y);
}

Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}


// 3. Arrow functions vs. ES5 functions (Read about `this` context)
arrowFunc((param) => {
    return param;
});

function es5Func(param) {
    return param;
}


// 4. `async/await` vs. `Promise.then`
const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise');
    }, 3000);
  });

promise
    .then(() => { return console.log('Success') })
    .catch(() => { return console.log('Error!') })
    .finally(() => { return console.log('Function done')});


const testAsync = async () => {
    try {
        await promise;
        console.log('Success');
    } catch(e) {
        console.log('Error', e);
    } finally {
        console.log('Function done');
    }
}
testAsync();
