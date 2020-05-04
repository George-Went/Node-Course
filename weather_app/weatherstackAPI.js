const chalk = require('chalk');
const request = require ('request')


// -------------------------------------------------------
// This program is using the weatherstack.com api 
// ------------------------------------------------------

const url = 'http://api.weatherstack.com/current?access_key=f5d29fe99e3d251369840b4f1baa08d0&query=37.8267,-122.4233&units=m'

// Requesting the entire JSON object and paring it while in the application
request({ url: url},(error, response) => {
    console.log(chalk.red("All JSON Object"))
    console.log(response)                      // Responds with entire JSON string
    const dataJSON = JSON.parse(response.body) // Parsing JSON 
    console.log(dataJSON)                      
})

// Requesting only the current weather JSON data 
// We can use a request function to parse JSON
request({ url:url, json: true }, (error, response) => {
    console.log(chalk.blue("Request current JSON"))
    console.log(response.body.current)         // requesting only the current weather JSON
})


// Parsing and reporting data in a useful manner
request({ url:url, json: true }, (error, response) => {
    const weatherData = (response.body.current)

    console.log(chalk.green("Weather Report "))

    console.log('Temperature: ' + weatherData.temperature)
    console.log('Wind speed: ' + weatherData.wind_speed)
    console.log('Pressure: ' + weatherData.pressure)
    console.log('Humidity: ' + weatherData.humidity)
    console.log('Cloud Cover: ' + weatherData.cloudcover)

    console.log(response.body.daily.current[0])
})




// // --------------------------------------------------
// // Geocoding 
// // --------------------------------------------------
// // Address -> lat/long -> link to weather 

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?limit=2&access_token=pk.eyJ1IjoiZ2Vvcmd3ZW50IiwiYSI6ImNrOWJlenFtNzAzZnEzZnRocDM4NTBmbmUifQ.0J3ryCuT7HbpGa1bzV9CHg'


// // Requesting the entire JSON object and paring it while in the application
// request({ geocodeURL: geocodeURL, json: true},(error, response) => {
//     console.log(chalk.green("All JSON Objec (MapBox) "))
//     console.log(response)                      // Responds with entire JSON string
//     const dataJSON = JSON.parse(response.body) // Parsing JSON 
//     console.log(dataJSON)                      
// })


// // // Requesting only the current weather JSON data 
// // // We can use a request function to parse JSON
// request({ url: geocodeURL, json: true, json: true}, (error, response) => {
//     if  (error) {
//         console.log(chalk.green("unable to connect to location service"))
//     }
//     else if (response.body.error) {

//         console.log('unable to find location')
//     }
//     else {
//         const latitude = response.body.features[0].center[1] 
//         const longlitude = response.body.features[0].center[0] 
//         console.log(chalk.green(latitude, longlitude))
//     }
// })

// -----------------------------------------
// Callback API 
// -----------------------------------------

const geocode = (address, callback) => {
    //adding address into api url
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +  '.json?limit=2&access_token=pk.eyJ1IjoiZ2Vvcmd3ZW50IiwiYSI6ImNrOWJlenFtNzAzZnEzZnRocDM4NTBmbmUifQ.0J3ryCuT7HbpGa1bzV9CHg'
    // the encodeURICompnent allows for adress string which contatins url parts such as '/ or?'
    // and ecodes them so the app doesnt crash

    // request our custom url response 
    request({url: url, json: true}, (error, response) => {

        if(error)
        {
            callback('unable to connect to location service.') // connects to geocode(error) as it is the first callback
        }
        else  if (response.body.features.lenght === 0)
        {
            callback('unable to find location.', undefined)
        }
        else {
            //link response callback to an object with the api data requested
            callback(undefined, { // 'undefined' -  makes sure that error does not have a value
                latitude: response.body.features[0].center[1], 
                longlitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
        
    })
}


// We can then call this API multiple times using a single callback function,
// since callbacks are asynchronos we dont have a collision between multiple executions
// of the same method.

geocode('London', (error, data) => { // only error OR data will be called
    console.log('Error: ', error)
    console.log('Data:', data)

})

geocode('Winchester', (error, data) => { // only error OR data will be called
    console.log('Error: ', error)
    console.log('Data:', data)

})

geocode('Southampton', (error, data) => { // only error OR data will be called
    console.log('Error: ', error)
    console.log('Data:', data)

})