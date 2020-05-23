const mongoose = require('mongoose')
const validator = require('validator')

// Connect to mongoose db
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})

// Construction schema for a mongoose model
const Task = mongoose.model('Task',{
    task: {
        type: String,
        required: true,
        trim: true // makes sure that spaces are not present before or after the name
    },
    completed:{
        type: Boolean, // Is a boolean (true / false) value
        require: true, // attribute is required
        default: false // sets default to false
    },
   
})
