// JS variable scope

// Create a function which has a for loop in it. Declare a variable with var inside the for loop. 
// Log the variable to the console after the loop. What happened? 
// Add a variable declared with let to the for loop. Log the variable to the console after the loop. What happened? 
// Create a variable outside of the function.  Log the variable to the console inside the function. What happened?
// Create a variable inside the function.  Log the variable to the console outside the function. What happened?

function loopFuncVar() {
    for(i=0; i < 1; i++) {
        var loopVar = 1;
    }
    // Logs 1 when function is called, has function scope
    console.log(loopVar);
}
loopFuncVar();


function loopFuncLet() {
    for(i=0; i < 1; i++) {
        let loopLet = 2;
    }
    // Throws reference error, has block scope
    console.log(loopLet);
}
loopFuncLet();


let outsideLet = 3

function loopFuncGlobal() {
    for(i=0; i < 1; i++) {
        // Logs 3 when function is called, has global scope
        console.log(outsideLet);   
    }
}
loopFuncGlobal();


function loopFuncLocal() {
    for(i=0; i < 1; i++) {
        var insideVar = 4;
    }
}
// Throws reference error, has local scope
console.log(insideVar);
