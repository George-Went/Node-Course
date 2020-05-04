//  Functions (Methods)

// A function is a created object that can be manipulated, extended
// and passed around as data.

//A normal function structure in js is defined as:

function functionName() {
    // function body
    // optional return
}

// A function can be used to ecnapsulate a method and execute it 
// remotely later in the script
function printHello() {
    console.log('Hello World')
}

printHello() // Returns 'HelloWorld

// A function can also be used to return a value
function printGreeting() {
    return 123 
}

console.log(printGreeting)   // Returns [Function: printGreeting]
console.log(printGreeting()) // Returns 123

// In the absince of a explictit return statment, a function will 
// retrun 'undefined'

// Functions can also take in one or multiple values

// Printing an input string to the console 
function printString (string){
    console.log(string)
}
printString("hello")

// They can also modify these values 
function addTwoNumbers (a, b){
    x = a + b
    return x
}

console.log(addTwoNumbers(2,3)) // returns 5

// Function scope 
// Everytime a function is called  