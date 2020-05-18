// CRUD - Create Read Update Delete

// const Mongodb = require('mongodb')
// const MongoClient = Mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//destructuing the above variables
const { MongoClient , ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017' // (localhost has known to cause issues so we use ip)
const databaseName = 'task-manager'

// var.connect(url, {options_object}, (error, client) => {})
MongoClient.connect(connectionURL, { userNewUrlParser: true }, (error, client) => {   
    if(error) {
        return console.log('Unable to connect to a database')
    }
    console.log('Connected')


    const db = client.db(databaseName) // assingn database name to 'db'


}) 

