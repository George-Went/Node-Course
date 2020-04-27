const chalk = require('chalk');
const request = require ('request')

// THis program is using the weatherstack.com api 


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
})



