// The aim is to take the file 'courseData.json'
// and overide the values with our own

const fs = require('fs')

// read json file
const dataBuffer = fs.readFileSync('courseData.json')

// Convert buffer to string
const dataJSON = dataBuffer.toString()

// parse JSON data into an object
const data = JSON.parse(dataJSON)

console.log(dataBuffer)
console.log(dataJSON.name)
console.log(data.name)

data.name = 'George'
data.age = '24'

 // Convert a JavaScript value to a JavaScript Object Notation (JSON) string
 const updatedJSON = JSON.stringify(data)

 console.log(updatedJSON)

// write json to a file - still 'shaped' as an object
fs.writeFileSync('updatedCourseData.json', updatedJSON)

