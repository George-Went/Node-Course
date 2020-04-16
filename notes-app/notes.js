const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your Notes'
}

// -----------------
// Saving Notes
// -----------------
const savedNotes = function (note){
    //console.log(note)
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('notes.json', dataJSON)
}

// -----------------
// Loading Notes - api for loading note 
// -----------------
const loadNotes = function() {
    // Defensive code for cheching if file exists
   
    //uses js try-catch 
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        //console.log("JSON " + dataJSON)
        return JSON.parse(dataJSON)
    }   
    // if there is an error (no file) 
    catch (err) {
        return []
    }
}   

// -----------------
// Adding Notes
// -----------------
const addNote = function (title, body) {

    //console.log(title + " " + body)

    const note = loadNotes()

    // check if note title is taken - if it is add to object 'duplicate note array"
    const duplicateNotes = note.filter(function () {
        return note.title === title
    })

    // if there is 
    if (duplicateNotes.length === 0) {
        note.push({
            title: title,
            body: body
        })
        savedNotes(note)
        console.log("New Note added")
    }  
    else {
        console.log("Note title taken")
    }
}



// -----------------
// Removing Notes
// -----------------
const removeNotes = function(title) {
    console.log("removing + " + title)

    // load existing json file into function
    const notes = loadNotes() 

    // function to return a version of the json with the specified object removed
    const notesToKeep = notes.filter(function (note) {
        // (note is like an 'x var' in a loop)
        console.log('note: ' + note.toString)
        return note.title !== title
    }) 


    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note: '+ title + ' Removed'))
        savedNotes(notesToKeep)  // Save remaning notes back into JSON
    }
    else 
    {
        console.log(chalk.red('No note with the title: ' + title))
    }

    console.log(notes)
    console.log(notesToKeep)

  


    // Alternate methedology
    // create function that filets the loaded json based on the title
    // function isMatch(title) {
    //     return title === notes.title
    // }

    // // // if there is a match:
    // // if (notes.filter(isMatch)) {
    // //     console.log(notes)
    // //     console.log("yes")
    // // }  
    // // else {
    // //     console.log("No note exists with that title")
    // // }



}
 


// we can export multiple functions 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
}