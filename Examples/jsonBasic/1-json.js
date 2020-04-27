// An Object
const book = {
    title: 'The Three Body Problem',
    author: 'Chiux Liun'
}
const fs = require('fs')

 // Convert a JavaScript value to a JavaScript Object Notation (JSON) string
const bookJSON = JSON.stringify(book)
console.log(bookJSON)                 

// Convert a JavaScript Object Notation (JSON) string into an object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

// write json to a file - still 'shaped' as an object
fs.writeFileSync('1-json.json', bookJSON)

// gets file data as a buffer 
// Buffer: region where the data is temparily stored - is in binary
const dataBuffer = fs.readFileSync('1-json.json')

// Convert buffer to string 
// Note that becauses it is a string, you cant get induvidual values from it
const dataJSON = dataBuffer.toString()

// parse JSON data into an object
const data = JSON.parse(dataJSON)

console.log(dataBuffer)
//console.log(dataBuffer.toString())
console.log(data.title)




