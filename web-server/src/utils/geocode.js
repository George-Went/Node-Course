
// Geocode.js uses callback functions to call the mapbox api
const request = require('request')

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
        else  if (response.body.features.length === 0)
        {
            callback('unable to find location.', undefined)
        }
        else {
            //link response callback to an object with the api data requested
            callback(undefined, { // 'undefined' -  makes sure that error does not have a value
            // the callback values are returned as part of an object 

                latitude: response.body.features[0].center[1], 
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name

            })
        }
        
    })
}


// We can then call this API multiple times using a single callback function,
// since callbacks are asynchronos we dont have a collision between multiple executions
// of the same method.

// geocode('London', (error, data) => { // only error OR data will be called
//     console.log('Error: ', error)
//     console.log('Data:', data)


module.exports = geocode 