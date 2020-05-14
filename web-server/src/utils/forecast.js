// API connection that finds weather based on location and connected to an API

//    Used as followed:

//    forecast([latitude, longitude], (error, data) => { })
//    deconstructed:
//    forecast([latitude, longitude], (error, {latitude, longitude, location}) => { })



const request = require('request')

const forecast = (latitude, longitude ,callback) => {
    //adding lattitude and longitude into api url

    const url = 'http://api.weatherstack.com/current?access_key=f5d29fe99e3d251369840b4f1baa08d0&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + 'units=m'
    // the encodeURICompnent allows for adress string which contatins url parts such as '/ or?'
    // and ecodes them so the app doesnt crash

    // request our custom url response 
    request({url: url, json: true}, (error, response) => {

        if(error)
        {
            callback('unable to connect to location service.') // connects to geocode(error) as it is the first callback
        }
        else  if (response.body.error)
        {
            callback('unable to find location.', undefined)
        }
        else {
            //link response callback to an object with the api data requested
            callback(undefined, // 'undefined' -  makes sure that error does not have a value    
                
                'Temperature: ' + response.body.current.temperature +
                ' Wind Speed: ' + response.body.current.wind_speed +
                ' Pressure: ' + response.body.current.pressure + 
                ' Humidity: '+ response.body.current.humidity + 
                ' Cloudcover: ' + response.body.current.cloudcover

                // Below Returns as Object
                //{
                // temperature: response.body.current.temperature,
                // wind_speed: response.body.current.wind_speed,
                // pressure: response.body.current.pressure,
                // humidity: response.body.current.humidity,
                // cloudcover: response.body.current.cloudcover,
                //}

            )
        }
        
    })
}

module.exports = forecast 