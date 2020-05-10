
# Course Topics 
## Notes (Basic Functions)

## Export Modules (require xyz)
### validation

## Chalk 

## Global packages and nodemon

## Command Line options and yargs

## Accessing file systems 

## Using Yargs

## ES6 Functions 

## Debugger and inspecting applications 
Debuggin node can be done using the chrome browser
due to the fact that chrom also runs on the V8 engione, google has added the ability to inspect and pause applications to see the variables and values wirthin an application. 

```js
debugger 
// To use a debugger, put 'inspect' before the script name 
// In thsi case it would be 'node inspect app.js --title="" --body=""'
```

To visit the debugger used by chrome, we can visit 
```chrome://inspect```

Remote target 
Port and localhost target (both are the same target)

## Error Messages in V8 
Error Code - This is a referance to what type of error you have 
Stack trace - this will show what functions were executed by the program to get to the code that had the error in. 


## Asynchronous Requests
Most of the functions used within node are asynchronus by design:  

```js
// Asynchronus programming example 
console.log('Starting Application')

setTimeout(( ) => { 
    console.log('2 second timer')
}, 2000 )

setTimeout( () => {
    console.log('0 Second timer') 
    // set time out is a node function provided by C++
}, 0)

console.log('Stopping')
// Stopping prints before the timer, even though it is after
```

When we run this program we can see the order in which they execute: 
1. Starting application 
2. Stopping application 
3. 0 Second Timer 
4. 2 Second Timer 

Even though the 0 second timer should have executed as soon as possible, the stopping timer still executed before it. 

This is due to the way that the **call stack** works - software is functions built ontop of functions, meanging that some functions are subservient to other functions.  

```js
// Call Stack Example
// location is under listlocations and so you get a 'stack' of methods that 
// get executed in the call stack 
const listLocations = (locations) => {
    locations.forEach((location) => {
        console.log(location)       
    });
}

const myLocations = ['London','Manchester','Birmingham']

listLocations(myLocations)
```


When a controller only needs to take one this works fine, however what if a user wants to take multiple requests - such as collecting multiple sets of data from a database or also dispalying images at the same time.  

You could daisy chain the operators together so that function 1 calls function 2 and when function 2 is complete function 1 runs - with multiple requests this can become very messy an leads to complex nested code, known as ```callback hell```.

>**Note:** Traditionally, code is executed in a linier fashion with one function/method taking place after the other (this is completly oversimplifying it). Due to the high level nature of node if we too this at its word, we would have massive daisy chains of code so that a database + a client and a server (and all the exception checks) - making it unreadable (for me at least)



## Call Stack 
In a simple synchronous application, the callstack tracks the execution of a program from its inception at a point like `app.js` to its final endpoint. With engines, when the program finishes it repeats again, with events being triggered if the programed conditions are met. This givecs rise to the name `event loop`.  

You can see what a call stack is when you get an error in languages like node or java - the functions that are called that lead up to the error are printed out in the manner they are called - a call stack. 

>**Note:** historically a stack






## HTTP Requests



## API Requests
An application programming interface (API) is used to reqest infomation from a Application through a protocol or Program, via the usage of a standardised procedure or (usually) non-graphical Interaface. 

>**Note:** Technically a desktop environment, a Graphical User Interface (GUI) can be considered an Application Programming Interface. 

The examples given below are using the weatherstack api (https://weatherstack.com/). 


With modern day web design, the main protocol for consuming data requested from another site is through a JSON (Javascript Object Notation) GET request. 

```js
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
```

One of the main things to note about the ```response.body.<stuff>``` requests is that ```the response.body``` is the main standard within node (and other web language frameworks)  while anything that comes after this is from the JSON reply itself.  
For example, if a JSON looked like: 
```JSON
{
  "request": {
    "type": "LatLon",
    "query": "Lat 37.83 and Lon -122.42",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "North Beach",
    "country": "United States of America",
    "region": "California",
    "lat": "37.806",
    "lon": "-122.411",
  },
  "current": {              // .current
    "pressure": 1025,       // .pressure
    "cloudcover": 100,
    "visibility": 16,
    "is_day": "yes"
  }
}
```
The main way to call a specific value would be 
```js
request({ url:url, json: true }, (error, response) => {
    const weatherData = (response.body.current.pressure)
})
```
whereby ```response.body``` is telling the program to look in the body of the response (an will usually be checked in a IDE), the ```current.pressure``` is part of the JSON (and will not be picked up by an IDE - something that caught me out a lot in the past)

If a response comes with a array rather than a series of nested JSON's, you can also use ```response.body.current[1]``` to referance the array rather than a JSON(Object(Object))   







## Web Servers


```js
const path = require('path')       // path allows us to access other directories in the server 
const express = require('express')
```
`/`  = absoloute link : From /root  
`./` = relative link  : From the current directory 


```js
console.log(__dirname) // absoloute path to the directory the file is in
console.log(__filename) // absoloute path to the file itself
console.log(path.join(__dirname, '../public')) // path module alows us to modify the file path
// it allows us to access files that are not in the same directory

const app = express() // link app to the express object
const publicDirectoryPath = path.join(__dirname, '../public') 
// assign the location of the public files to a variable

app.use(express.static(publicDirectoryPath)) // sets up the static file location to server static files
``` 
We can link to pages using 
```js
// Root
app.get('', (req, res) => { // (port, function(request, response))
    res.send('<h1>Hello express<h1>')
})
```

We can also link to html pages by linking the pages from root with html
for example ```localhost:3000/index.html```

## Template Engines
Templating engines allow us to create dynamic content rather than static content within node applications

```js
app.set('view engine', 'hbs')  //app.set('value', 'module'

// Root
app.get('', (req, res) => {
    res.render('index')
})
```
You can provide / inject values into .hbs files by using ``{{ }}``
index.hbs
```html
<body>
    <h1> {{title}}</h1>
    <p>{{name}}</p>
</body>

```
app.js
```js
app.get('', (req, res) => {
    res.render('index', {
        title: 'Hello World',
        name: 'George'
    })
})
```

### Partial Templating 
Partial Templating allows us to template certian parts of the site such as a header or a navigation bar. 

Rendering a partial: 
header.hbs
```hbs
<h1>Static Header.hbs Text</h1>
```

help.hbs
```hbs
<body>
    {{>header}}     <!-- This is the partal file being imported into help.hbs -->
    <h1> {{title}}</h1>
</body>
```
> **Note:** When running the node application with partial templating, we need to use ```app.js -e js,hbs```. This notifies the app that both javascript and handlebars are being used

We can also change our header to referance html page variables from different pages. 

header.hbs
```hbs
<h1>{{title}}</h1>  <!-- This allows us to access title variables from the page variables -->
```

We can also create navigation menus using the template partials: 

```hbs
<h1>{{title}}</h1>  <!-- referances the 'title' variable from the app render variables -->

<div> <!-- division -->
    <a href="/">Weather</a> <!-- anchor -->
    <a href="/about">About</a> <!-- anchor -->
    <a href="/help">Help</a> <!-- anchor -->
</div>
```

## 404 Pages
404 pages can be used when the user goes to a User Resource Interface (URL) that does not match with any url exiting in the application. 
The 404 page has to be at the bottom of the application code so that it is the last executed route.
```js
app.get('*', (req, res) => { // The * (wildcard character) means it matches all urls 
    res.send('404 Page')
})
```

We can also create specific 404 pages by adding the wildcard symbol after a specific directory. 
```js
app.get('/help/*', (req, res) => { // '*' is a wildcard url 
res.render('404', {
    title: 'help',
    errorMessage: '404 - Help article not found',
    name: 'George Went'
    })
})
```

## Styling applications
We can link css files within the /public directory by letting the express application (in this case, assigned to ```app```) know the location of the /public directory. We then assignt this link to the express static functions, allowing the application to serve static files. 

```js
const publicDirectoryPath = path.join(__dirname, '../public') // assign the location of the public files to a variable
const viewsPath = path.join(__dirname, '../templates/views')        // Assign the location of the views file to a custom directory
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars  engine and views location 
app.set('view engine', 'hbs')  //app.set('value', 'module')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// sets up the static file location to server static files
app.use(express.static(publicDirectoryPath)) 
```

### Flexboxes
Flexboxes allow for more control over where content appears on a page
You can activate flexbox by changing the diplay mode:   
```css
body {
    /*set the display to allow flexboxes*/
    display: flex;
}
```
The default content will usually appear in a row, to change this you can set the flex-direction to column:  
```css
body{
    flex-direction: column; /*Default value is 'row'- arranges divs in a row*/
    min-height: 100vh; /*sets height 100% of viewport (display) height*/
}
```

We can set a flex-box to fill all avalible space on the body height by using ```flex-grow```
```css
.main-content{
    flex-grow: 1; /*allows a given element to grow to fill all spare space*/
}
```

