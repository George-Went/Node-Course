const chalk = require('chalk');
const request = require ('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// THis program is using the weatherstack.com api 


const url = 'http://api.weatherstack.com/current?access_key=f5d29fe99e3d251369840b4f1baa08d0&query=37.8267,-122.4233&units=m'
const urlBadConnection = "http://apii.weatherstack.com/current?access_key=f5d29fe99e3d251369840b4f1baa08d0&query=37.8267,-122.4233&units=m"
const urlBadCoords = 'http://api.weatherstack.com/current?access_key=f5d29fe99e3d251369840b4f1baa08d0&query=&units=m'


// Parsing and reporting data in a useful manner
// request({ url:url, json: true }, (error, response) => {
   
//     if (error) {
//         // Errors will print out - but this isnt very useful for a normal user
//         // This error pings when there is no connection to the api server
//         // This is known as  a low level error
//         console.log("unable to connect to weather service")
//     } 
//     else if (response.body.error) {
//         // This errro pings if the query is bad - there is a connection, but there
//         // are no coords in the query
//         console.log('unable to find location')
//     }
//     else {

//         const weatherData = (response.body.current)

//         console.log(weatherData)

//         console.log(chalk.blue("Weather Report "))

//         console.log('Temperature: ' + weatherData.temperature)
//         console.log('Wind speed: ' + weatherData.wind_speed)
//         console.log('Pressure: ' + weatherData.pressure)
//         console.log('Humidity: ' + weatherData.humidity)
//         console.log('Cloud Cover: ' + weatherData.cloudcover)
//     }
// })



// Geocoding 
// Address -> lat/long -> link to weather 

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?limit=2&access_token=pk.eyJ1IjoiZ2Vvcmd3ZW50IiwiYSI6ImNrOWJlenFtNzAzZnEzZnRocDM4NTBmbmUifQ.0J3ryCuT7HbpGa1bzV9CHg'


// // Requesting the entire JSON object and paring it while in the application
// // request({ urlMap: urlMap, json: true},(error, response) => {
// //     console.log(chalk.green("All JSON Objec (MapBox) "))
// //     console.log(response)                      // Responds with entire JSON string
// //     const dataJSON = JSON.parse(response.body) // Parsing JSON 
// //     console.log(dataJSON)                      
// // })


// // Requesting only the current weather JSON data 
// // We can use a request function to parse JSON
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

geocode('london', (error, data) => { // only error OR data will be called
    console.log('Error:', error) // will return undefined if no error shows up 
    console.log('Data:', data)
})

forecast(-75.7088, 34.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

// We can also 'chain' calbacks so that one callback can return results
// that are then used in a second callback

geocode('Boston', (error, data) => { // only error OR data will be called
console.log('Error:', error) // will return undefined if no error shows up 
console.log('Data:', data)

forecast(data.longlitude, data.latitude, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    })
})
