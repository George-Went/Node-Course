var express = require('express');
var router = express.Router();

// Require controller modules.
var controller = require('../controllers/controller');



// Index page
// This is an example of what a route looks like when it isnt 
// connected to a controller file
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Example Project', name: 'George' });
})



/* GET home page. */
router.get('/controller', controller.index_get);


// About example
router.get('/about', controller.about_get);


// Form Example
router.get('/form', controller.form_get);
router.post('/form', controller.form_post);


// Form with sanitizartion example
router.get('/formSanitization', controller.form_sanitization_get);
router.post('/formSanitization', controller.form_sanitization_post);







// Example of a route that referances a controller file

// GET file upload
router.get('/file_upload', controller.file_upload_get);

//POST file upload 
router.post('/file_upload', controller.file_upload_post);

module.exports = router;
