const path = require('path') 
const express = require('express')
const hbs = require('hbs')

// Importing utils functions
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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

    if (!req.query.address){  // This code only runs when the request fails
        return res.send({
            error: 'You must provide a location search term'
        })
    }
    
    // Code for console logging on server side console
    // -----------------------------------------------------------------------------------------
   
    // geocode(req.query.address, (error, { latitude, longitude, location}) => { 
    //     console.log(latitude)
    //     console.log(longitude)
    //     console.log(location)

    //     forecast(latitude, longitude, (error, forecastData) => {
    //         console.log(forecastData)
    //     })

    // })
    // -------------------------------------------------------------------------------------
    
    
    // 1. require geocode/forecast into app.js
    // 2. use address to geocode
    // 3. Use coords to get forecast 
    // 4. Send back real forecast location
    
    //2.
    geocode(req.query.address, (error, { latitude, longitude, location} = {}) => { // default value set to blank object 
        if (error) {
            return res.send({error})
        }
        // 3. 
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }
            // 4. 
            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            })
        })
    })
    
    // res.send({
    //     forecast: "snow",// JSON takes data from the url address term
    //     location: 17,
    //     address: 5,
    // })
    
})












app.get('/products', (req, res) => {
    if (!req.query.search){  // This code only runs when the request fails
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)

    res.send({
        // JSON 
        products: []
    })
})



// ----------------------------------------------------------------------
// 404 Pages 
// ----------------------------------------------------------------------
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






// ----------------------------------------------------------------------
// Set up port to listen on 
// ----------------------------------------------------------------------
app.listen(3000, () => {   
    console.log('Server is up and on port 3000')
})

