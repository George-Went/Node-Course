// The controller web page 'controls' all of the actionable parts 
// of a web page (buttons, etc)

const validator = require('express-validator');

// -----------------------------------------------------
// INDEX PAGE
// -----------------------------------------------------

// Display Genre update form on GET.
exports.index_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Main Page');
};

// Handle Genre update on POST.
exports.index_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre update POST');
};

// -----------------------------------------------------
// ABOUT PAGE
// -----------------------------------------------------

exports.about_get = function (req, res) {
  res.render('about', {
    title: 'About',
    about: 'This is to demonstraight the connection betweeen controller -> routes -> app -> html file',
    name: 'George'
  });
};




// -----------------------------------------------------
// BASIC FORM PAGE
// -----------------------------------------------------

// Form page GET
exports.form_get = function (req, res) {
  res.render('form', {
    title: 'Form Example',
    data: {},
    errors: {}
  });
};

// Form Page POST
exports.form_post = function (req, res) {
  res.render('form', {
    title: 'Form Example',
    data: req.body.message  // take data from form message
  })
  console.log(req.body.name) // print data back to server console log
};


// -----------------------------------------------------
// FORM PAGE WITH SANITIZATION (FORM 2)
// -----------------------------------------------------

// Form page GET
exports.form_sanitization_get = function (req, res) {
  res.render('messageForm', {
    title: 'Form Sanitization Example',
    data: {},
    errors: {}
  });
};

// Form Page POST
// exports.form_sanitization_post = [
//   // Note that instead of creating a single middleware function,
//   // this controller specifies an array of middleware functions
  
//     // Validate that the name field is not empty.
//     validator.check('name', 'Genre name required').isLength({ min: 1 }).trim(),
  
//     // Sanitize (escape) the name field.
//     validator.body('name').escape()
  
//     // Process request after validation and sanitization.
//     ],(req, res, next) => {
      
//       // Extract the validation errors from a request.
//       const errors = validator.validationResult(req);


//       // Check if there are errors - note that the statement 'if errors is not empty'
//       if (!errors.isEmpty()) {
//         // There are errors. Render the form again with sanitized values/error messages.
//         res.render('messageForm', { 
//             title: 'Sanitised message', 
//             data: req.body.message, 
//             errors: errors.array()});
            
//             console.log(errors)
//         return;
//       }
//       else {
//         res.render('messageForm', {
//           title: 'Form Example',
//           data: req.body.message
//         })
//         console.log(req.body.name)
//       }


//   // (req, res, next) => {
//   // res.render('messageForm', {
//   //   title: 'Form Example',
//   //   data: req.body 
//   // })
// };

exports.form_sanitization_post = function(req, res) {
  
  // var messageData = new messageData (
  //   {
  //     name: req.body.name,
  //     title: req.body.title,
  //     message: req.body.age
  //   }
  // )



  res.render('messageForm', {
    title: 'Sanitised message',
    data: req.body.data

  });
}







// -----------------------------------------------------
// FORM PAGE MODIFYING INPUT
// -----------------------------------------------------

exports.form_modification_get = function (req, res) {
  res.send('Not currently implemented   <a href = "/">Home</a>')
}
exports.form_modification_post = function (req, res) {
  res.send('Not currently implemented   <a href = "/">Home</a>')
}


// -----------------------------------------------------
// FORM PAGE SAVING TO DATABASE
// -----------------------------------------------------

exports.form_db_get = function (req, res) {
  res.send('Not currently implemented   <a href = "/">Home</a>')
}
exports.form_db_post = function (req, res) {
  res.send('Not currently implemented   <a href = "/">Home</a>')
}












// -----------------------------------------------------
// UPLOADING IMAGE 
// -----------------------------------------------------

// -----------------------------------------------------
// SAVING IMAGE TO DATABASE
// -----------------------------------------------------

// -----------------------------------------------------
// SAVING FILE
// -----------------------------------------------------

// -----------------------------------------------------
// MODIFYING FILE
// -----------------------------------------------------

// -----------------------------------------------------
// SAVING FILE TO DATABASE
// -----------------------------------------------------

// -----------------------------------------------------
// SAVING CSV TO DATABASE
// -----------------------------------------------------

// -----------------------------------------------------
// EDITING CSV FILE
// -----------------------------------------------------



//uploading a file GET
exports.file_upload_get = function (req, res) {
  res.render('file_upload');
}

// uploading a file POST
exports.file_upload_post = function (req, res, next) {

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(`./upload/${sampleFile.name}`, function (err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });

};