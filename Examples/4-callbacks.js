//Callbacks

// Timeout Function 
// setTimeout( function , wait(miliseconds) )
setTimeout(() => {
    console.log('two seconds passed')
}, 2000)
// This Example prints 'two seconds passed' after 2 seconds

// a callback function is a provided function with the 
// intention of having it called later on
// a function is retured to another function - regradless of if it is sychronous or asynchronous
// we can see this in the weatherstackAPI - different API's can come at different times due to them coming from different servers


const names = ['John', 'Mark', 'Andrew']
const shortNames = names.filter((name => {
    return name.length <= 4
}))
// filter is a callback that takes in the elements in 
// an array and runs a function - returning the elements that meet the specified conditions


//Example of a callback (fake values)
const geocode = (address, callback) => {
    const data = {
        latitude: 0,
        longlitude: 0
    }
    return data
}


// Now if we put the function inside of the setTimeout function
// We should expect it to work, but it instead returns data as 'undefined'
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longlitude: 0
        }

        callback(data) // this is how you can retrun data within a callback
    }, 2000)
}

// console.log(geocode('london')) -> this does not work

// This is due to the fact that due to the 'stack', main will always finish 
// before setTimeout is executed, meaning data is never assigned a value

// we can callback the 'geocode' function, with:
// address = London, callback = arg1 = data = [lat: 0,long: 0]
geocode('London', (arg1) => {
    console.log(arg1)
})
// console.log(data)


const add = (a, b, callback) => {
    // Simulate asynchronous function
    setTimeout(() => {                  
        callback(a + b) 
        // we cant return, due to it being a callback, 
        // but we can 'callback' the callback method
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) 
    // sum is used as the instance of the callback variable 
    // the reason why it is in brackets is due to 
})

add(1, 6, (hal) => {
    console.log(hal) 
    // sum is used as the instance of the callback variable 
})