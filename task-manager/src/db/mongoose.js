const mongoose = require('mongoose')
const validator = require('validator')

// Connect to mongoose db
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})









// Construction schema for a mongoose model
// const User = mongoose.model('User',{
//     name: {
//         type: String,
//         required: true,
//         trim: true // makes sure that spaces are not present before or after the name
//     },
//     age:{
//         type: Number,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true, 
//         validate(value) {
//             if (!validator.isEmail(value)) { // using imported validator email check (note that it is flipped - if the value is NOT an email)
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 6,
//         validate(value) {       // creating new validation check
//             if (value.toLowerCase().includes('password')) { // using custom validation check to seee if password is 'password'
//                 throw new Error('You cant use password as password')
//             }
//         }
//     }
// })

// // Creating an instance of the mongoose model
// const me = new User({
//     name: 'George',
//     age: 24,
//     email: 'Gep@'
// })

// // Saves the instace to the database - uses a promise to allow for then/catch results
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error: ', error )
// })



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

const cat = new Task({
    task: 'feed cat',
    completed: true
})

const shopping = new Task({
    task: 'do shopping',
    completed: false
})

const tea = new Task({
    task: 'make  tea',
})

cat.save().then(() => {
    console.log(cat)
}).catch((error) => {
    console.log('Error: ', error )
})

shopping.save().then(() => {
    console.log(shopping)
}).catch((error) => {
    console.log('Error: ', error )
})

tea.save().then(() => {
    console.log(tea)
}).catch((error) => {
    console.log('Error: ', error )
})










// const User = mongoose.model('User',{
//     name: {
//         type: String
//     },
//     age:{
//         type: Number
//     }
// })


// const Task = mongoose.model('Task', {
//     description:{
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: 'Learn Mongoose Library',
//     completed: true
// })

// // Saves the instace to the database - uses a promise to allow for then/catch results
// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error: ', error )
// })
