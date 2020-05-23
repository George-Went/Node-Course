const express = require('express')      // Imports express functions
require('./db/mongoose')                // ensures that file runs - we dont need anythign from this file
const User = require('./models/user')   // Imports /model/user functions

const app = express()
const port = 3000


app.use(express.json())                  // Allows for parsing of json data


app.post('/users', (req, res) => {      // responds to a POST 
    const user = new User(req.body) 
    
    user.save().then(() => {
        res.send(user)
    }).catch((e) => { // catch error (using 'e')
        res.status(400).send(e) // send back a 400 status (Bad Request)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})