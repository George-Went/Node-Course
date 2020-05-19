// CRUD - Create Read Update Delete

// const Mongodb = require('mongodb')
// const MongoClient = Mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//destructuing the above variables
const { MongoClient , ObjectID } = require('mongodb')

// ------------------------------------------------------------------------------------------ 
// ID generation
// ------------------------------------------------------------------------------------------
const id = new ObjectID()           // generates a new id
console.log(id)                         // prints the newly generated id 
console.log(id.getTimestamp())          // prints the time the id was generated
console.log(id.id)                      // prints the binary data
console.log(id.id.length)               // prints the id length
console.log(id.toHexString().lenght)    // prints back the id as a string

// Conneting to a database
const connectionURL = 'mongodb://127.0.0.1:27017' // (localhost has known to cause issues so we use ip)
const databaseName = 'exampleDatabase'


// var.connect(url, {options_object}, (error, client) => {})
MongoClient.connect(connectionURL, { userNewUrlParser: true }, (error, client) => {   
    if(error) {
        return console.log('Unable to connect to a database')
    }
    console.log('Connected')


    const db = client.db(databaseName) // assingn database name to 'db'

    // ------------------------------------------------------------------------------------------
    // Inserting Documents Into a Collection 
    // ------------------------------------------------------------------------------------------
  
    // Inserting one document into a collection 
    db.collection('users').insertOne({
        _id: id,
        name: 'Harry',
        Age: 22
    }, (error, result) => {// error OR result triggers based on the success of the operation
        if (error) {
            return console.log('unable to insert user')
        }
    
        console.log(result.ops) // ops (operations) contains all of the documents inserted
    })

  
    // Inserting Multiple Documents into a collection 
    db.collection('users').insertMany([
        {
            task: 'get food',
            completed: true
        },
        {
            task: 'feed cat',
            completed: false
        },
        {
            task: 'pierre',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('unable to insert documents')
        }

        console.log(result.ops) 
    })

    // ------------------------------------------------------------------------------------------
    // Reading Documents From a Collection
    // ------------------------------------------------------------------------------------------
    
    // finding a single user via their name
    db.collection('users').findOne({ name: 'george'}, (error, user) => {
        if (error) {
            console.log('Unable to fetch')
        }
        console.log(user)
    })

    // Finding a single user via their id
    db.collection('users').findOne({_id: new ObjectID('5ebec6b5b738ab26ff9ab101') },(error, user) => {
        if (error) {
            console.log('Unable to fetch')
        }
        console.log(user)
    })

    // Finding multiple users and inputing results into an array
    db.collection('users').find({ name: 'george'}).toArray((error, user) => {
        if (error) {
            console.log('Unable to fetch')
        }
        console.log(user)
    })

    // Finding a task based on the completion state
    db.collection('tasks').find({'completed': false }).toArray((error, tasks) => {
        if (error) {
            console.log('Unable to fetch')
        }
        console.log(tasks)
    })

    // ------------------------------------------------------------------------------------------
    // Updating Documents From a Collection
    // ------------------------------------------------------------------------------------------
    
    // Updating a single user via their id 
    db.collection('users').updateOne(
        {_id: new Object('5ebec6b5b738ab26ff9ab101')}, // creating a new id object with our existing _id value
        {$set: {                                       // changing a documents variables
            name: 'mike'                               // Changing name variable to 'mike'
        }
    })

    // Updating a single user via id and then returning data via a promise
    const updatePromise = db.collection('users').updateOne(
        {_id: new Object('5ebec6b5b738ab26ff9ab101')}, // creating a new id object with our existing _id value
        {$set: {                                       // changing a documents variables
            name: 'mike'                               // Changing name variable to 'mike'
        }
    })

    updatePromise.then((result) => {   // Creating promise that returns result or error
        console.log(result)            // return result datat
    }).catch((error) => {
        console.log(error)             // return result error
    })

    // We can combine the two to do all of the above at once 
    db.collection('users').updateOne(
        {_id: ObjectID('5ebec6b5b738ab26ff9ab101')}, // creating a new id object with our existing _id value
        {$set: {                                  // changing a documents variables
            name: 'mike',
            age: '25'                               // Changing name variable to 'mike'
        }
    }).then((result) => {
        console.log(result)    // return result data (success state)
    }).catch((error) => {
        console.log(error)     // return error data (failure state )
    })

    // Updating multiple doucments from a collection
    // note that this uses the 'tasks' collection
    db.collection('tasks').updateMany({
        completed: true         // Find all documents that are 'completed: true'
    },{
        $set: {
            completed: false    // Set the value of 'completed' to 'false'
        }
    }).then((result) => {
        console.log(result)    // return result data (success state)
    }).catch((error) => {
        console.log(error)     // return error data (failure state )
    })


    // ------------------------------------------------------------------------------------------
    // Deleting Documents From a Collection
    // ------------------------------------------------------------------------------------------
    
    // Removing One Document from a collection
    db.collection('users').deleteOne({
        age: 30,                   // filter based on age 
    }).then((result) => {
        console.log(result)        // return result data (success state) 
    }).catch((error) => {
        console.log(error)         // return error data (failure state )
    })

    // Removing Multiple Documents from a collection
    db.collection('users').deleteMany({
        age: 26,                    // filter based on age 
    }).then((result) => {
        console.log(result)        
    }).catch((error) => {
        console.log(error)         
    })

}) 