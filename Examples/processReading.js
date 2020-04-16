const chalk = require('chalk');
const getNotes = require('../notes-app/notes.js');



const command = process.argv[2]

console.log(process.argv) // prints processes 


if (command === 'add') {
    console.log('Adding Note')
}
else if (command === 'remove') {
    console.log('Removing Note')
}

//example use:
// node app.js add --title "add"



const msg = getNotes();
console.log(msg);


const greetingMsg = chalk.blue.inverse.bold('Success');
console.log(greetingMsg);

console.log(process.argv)    // prints an array of process arguments 
console.log(process.argv[2]) // prints the 3rd 
