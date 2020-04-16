const validator = require('validator')

const notes = require('../notes-app/notes.js')

const myNotes = notes("hello world")


console.log(validator.isEmail('gep.went@gmail.com'))
console.log(validator.isURL('bbc.com'))







// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

