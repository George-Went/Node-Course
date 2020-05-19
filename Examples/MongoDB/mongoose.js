// Operations for Mongoose npm package





// Construction schema for a mongoose model
// Schemas are used as a 'blueprint' for data to be sorted into before being put into a model 
const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true // makes sure that spaces are not present before or after the name
    },
    age:{
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true, 
        validate(value) {
            if (!validator.isEmail(value)) { // using imported validator email check (note that it is flipped - if the value is NOT an email)
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {       // creating new validation check
            if (value.toLowerCase().includes('password')) { // using custom validation check to seee if password is 'password'
                throw new Error('You cant use password as password')
            }
        }
    }
})

// Creating an instance of the mongoose model
const me = new User({
    name: 'George',
    age: 24,
    email: 'Gep@'
})

// Saves the instace to the database - uses a promise to allow for then/catch results
me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error: ', error )
})

// Another example


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