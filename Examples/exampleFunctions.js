


const add = function(a , b) {
    return a + b
}

// Both functions peform the same role 
// The 'squareAlt' uses ES6 arrows 

square = function (x) {
    return x * x
}

const squareAlt = (x) => x * x




console.log(square(2))
console.log(squareAlt(3))

// Event is an object that containts the variable 'name'
// It also containts a function / method that prints  a string with the name 
// If it was not for the '.this', the name would be an undefined variable
const event = {
    name: 'Birthday Party',
    printGuestList: function() {
        console.log("Guest list for " + this.name)
    }
}

event.printGuestList()