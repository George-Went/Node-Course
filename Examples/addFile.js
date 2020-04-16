// Importing Node.js Core moduels 
const fs = require('fs'); // File System module 

// Creating a new file 
fs.writeFileSync('notes.txt','My name is George');

// Appending an existing file
fs.appendFileSync('notes.txt','Yes')