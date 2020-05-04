// -----------------------
// Raw HTTP request
// -----------------------

//http is a core node model, already in node
const http = require('http')



// weatherstack API url
const url = 'http://api.weatherstack.com/current?access_key=f5d29fe99e3d251369840b4f1baa08d0&query=36.8267,-12.4233&units=m'


const request = http.request(url, (response) => {
    let data = ''


    response.on('data', (chunk) =>{ // 'response.on' allows us to register a handler
    data = data + chunk.toString()  // without this, the returned chunk is just a buffer (used to hold the data before its used)
    console.log(chunk)
    }) 

    response.on('end', () =>{   // we just nee to call this function to show that we have ended the request
        const body = JSON.parse(data) //parses the data string so it can be refreanced as a JSON
        console.log(body)
    })
})

// Error handeling 
request.end()  // ends the node engine 

request.on('error', (error) => {
    console.log('An error has occured: ', error)
})
