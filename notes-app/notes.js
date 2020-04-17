const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes'
}


// -----------------
// Adding Notes
// -----------------
const addNote = (title, body) => {

    //console.log(title + " " + body)

    const note = loadNotes()

    // check if note title is taken - if it is add to object 'duplicate note array"
    
    // const duplicateNotes = note.filter((note) => note.title === title)
    // function used to go thorgh all notes, not break if it found a duplicate

    const duplicateNote = notes.find((note) => note.title === title)
    // find will break if a note matches 
    
    // if there is not a duplicate
    if (!duplicateNote) {
        note.push({         // add new note
            title: title,
            body: body
        })
        savedNotes(note)
        console.log("New Note added")
    }  
    // if there is a duplicate
    else {
        console.log("Note title taken")
    }
}



// -----------------
// Removing Notes
// -----------------
const removeNotes = (title) => {
    console.log("removing + " + title)

    // load existing json file into function
    const notes = loadNotes() 

    // function to return a version of the json with the specified object removed
    const notesToKeep = notes.filter((note) => {
        // (note is like an 'x var' in a loop)
        console.log('note: ' + note.toString)
        return note.title !== title
    }) 


    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note: '+ title + ' Removed'))
        savedNotes(notesToKeep)  // Save remaning notes back into JSON
    }
    else {
        console.log(chalk.red('No note with the title: ' + title))
    }

    console.log(notes)
    console.log(notesToKeep)
}
 
// -----------------
// Listing Notes
// -----------------
const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(chalk.green(note.title))
        console.log(note.body)
    });
}

// -----------------
// Reading Notes
// -----------------
const readNotes = (title) => {
    const notes = loadNotes()
    
    const duplicateNote = notes.find((note) => note.title === title)
    if (duplicateNote) {

        console.log( chalk.green(duplicateNote.title))
        console.log(duplicateNote.body)
    }  
    // if there is a duplicate
    else {
        console.log( chalk.red("No note called " + title))
    }

}




// Internal functions

// -----------------
// Saving Notes
// -----------------
const savedNotes = (note) =>{
    //console.log(note)
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('notes.json', dataJSON)
}

// -----------------
// Loading Notes - api for loading note 
// -----------------
const loadNotes = () => {
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


// we can export multiple functions 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}