// Asynchronus programming example 
console.log('Starting Application')

setTimeout(( ) => { 
    console.log('2 second timer')
}, 2000 )

setTimeout( () => {
    console.log('0 Second timer') 
    // set time out is a node fucntion provided by C++
}, 0)

console.log('Stopping')
// Stopping prints before the timer, even though it is after

// the stopping log is on the main thread, as main() is 
// still on the stack after 'Starting application' it will run 'stopping' 




// Call Stack Example
// location is under listlocations and so you get a 'stack' of methods that 
// get executed in the call stack 
const listLocations = (locations) => {
    locations.forEach((location) => {
        console.log(location)       
    });
}

const myLocations = ['London','Manchester','Birmingham']

listLocations(myLocations)

