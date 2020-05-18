
// example callback pattern
//  function doWorkCallback ( var callback)

// const doWorkCallback = (callback) => { 
//     setTimeout(() => {
//         callback('This is my error', undefined)
//     }, 2000)
// }

// doWorkCallback2 = function(callback){
//     setTimeout(() => {
//         callback('This is my error', undefined)
//     }, 1000)
// }

// doWorkCallback((error, result) => {
//     if (error) {
//         return console.log(error)
//     }

//     console.log(result)
// })

const doWorkPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
       // resolve([7,4,1])
        reject('Things went wrong') 
        resolve([7,4,1])
    }, 2000)
})

// Success - resolve 
doWorkPromise.then((result) => {
    console.log('Success', result) // function goes well - resolve is called
}).catch((error) => {
    console.log('Error', error)    // function failed - reject is called
}) 


//                           fufiled 
//                         /
// Promise -- Pending --> 
//                         \
//                           rejected 

