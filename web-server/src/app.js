const path = require('path') 
const express = require('express')

console.log(__dirname) // absoloute path to the directory the file is in
console.log(__filename) // absoloute path to the file itself
console.log(path.join(__dirname, '../public')) // path module alows us to modify the file path
                                               // it allows us to access files that are not in the same directory

const app = express() // link app to the express object
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath)) // sets up the static file location to server static files



// Root
app.get('', (req, res) => { // (port, function(request, response))
    res.send('<h1>Hello express<h1>')
})


// // app.com/help
// // Express automatically creates a json response when provided with json / object data
// app.get('/help', (req, res) =>{
//     res.send(
//         {name: 'george',
//          age: 24})
// })

// // /about
// app.get('/about' ,(req, res) => {
//     res.send('About')
// })







// /weather
app.get('/weather' ,(req, res) => {
    res.send('<h1>Weather<h1>')
})

app.get('/weatherData' ,(req, res) => {
    res.send(
        {
            location: 'london',
            temperature: 17,
            wind_speed: 5,
            cloud_coverage: 'Overcast '
        })
})

app.listen(3000, () => {   
    console.log('Server is up and on port 3000')
})


