// The application page is where the express 'chassis' is built
// this include all the middleware, views and handleing of errors

const express = require('express'); 

const createError = require('http-errors');
const path = require('path');         // path module proveds utilities for working with files and directories
const hbs = require('hbs')

// Middleware Logging tools
var logger = require('morgan');

// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

//Route Imports  --------------------------------------------
var routes = require('./routes/index');


// Initilise express application  
var app = express();

// ------------------------------------------------------------
// Load View Engine
// ------------------------------------------------------------
const viewsPath = path.join(__dirname, './templates/views')  
const partialsPath = path.join(__dirname, './templates/partials')


app.set('views', path.join(viewsPath));
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath)

app.use(logger('dev'));

// tell express to use 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Find location for servering static files (images etc.)
app.use(express.static(path.join(__dirname, 'public')));


// Tell express (app) to use the routes (/routes/index/) 
// as the js file when a user goes to 'https://localhost/'
app.use('/', routes);











// ------------------------------------------------------------
// ERROR HANDELING 
// ------------------------------------------------------------

// Catch 404 
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error.hbs');
  });
  


// ------------------------------------------------------------
// Start Server
// ------------------------------------------------------------
app.listen(3000, function(){
console.log('server started on port 3000')
});
  
  