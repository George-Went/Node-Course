
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