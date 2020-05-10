const path = require('path') 
const express = require('express')
const hbs = require('hbs')

const app = express() // link app to the express object

// Define Path for express configurations (configs)
const publicDirectoryPath = path.join(__dirname, '../public') // assign the location of the public files to a variable
const viewsPath = path.join(__dirname, '../templates/views')        // Assign the location of the views file to a custom directory
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars  engine and views location 
app.set('view engine', 'hbs')  //app.set('value', 'module')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// sets up the static file location to server static files
app.use(express.static(publicDirectoryPath)) 



// Root
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'George Went'
    })
})


// /about
app.get('/about' ,(req, res) => {
    res.render('about', {
                title: 'About',
                name: 'George Went'
    })
})


// app.com/help
// Express automatically creates a json response when provided with json / object data
app.get('/help', (req, res) =>{
    res.render('help', {
        title: 'Help',
        content: 'Some helpful stuff',
        name: 'George Went'
    })
})



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

app.get('/help/*', (req, res) => { // '*' is a wildcard url 
res.render('404', {
    title: 'help',
    errorMessage: '404 - Help article not found',
    name: 'George Went'
})
})


app.get('*', (req, res) => { // '*' is a wildcard url 
    res.render('404', {
        errorMessage: '404 - Page Not Found',
        name: 'George Went'
    })
})

app.listen(3000, () => {   
    console.log('Server is up and on port 3000')
})


