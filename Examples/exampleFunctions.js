
// -------------------
// Functions 
// -------------------

const add = function(a , b) {
    return a + b
}

console.log(add(2, 3))



// Both functions peform the same role 
// The 'squareAlt' uses ES6 arrows 

// Standard Function
square = function (x) {
    return x * x
}

// Alternate function (ES6 Function)
const squareAlt = (x) => x * x




console.log(square(2))
console.log(squareAlt(3))

// Event is an object that containts the variable 'name'
// It also containts a function / method that prints  a string with the name 
// If it was not for the '.this', the name would be an undefined variable
const event = {
    name: 'Birthday Party',
    guestList: ['Mark', 'John', 'Ford'],
    printGuestList: function() {
        console.log("Guest list for " + this.name)
        
        // this.name is not bound to 'name', meaning that it will appear as undefined
        this.guestList.forEach( function(guest){
            console.log(guest + ' is attending ' + this.name)
        })

        // Arrow Functions do not bind to their own this.value
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })


    }
}

event.printGuestList()




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
