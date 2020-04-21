const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

debugger 
// To use a debugger, put 'inspect' before the script name 
// In thsi case it would be 'node inspect app.js --title="" --body=""'

// Adding a Note
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Removing a Note
yargs.command({
    command: 'remove',
    describe: 'remove an existing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }
})

// Listing all Notes
yargs.command({
    command: 'list',
    describe: 'list all notes',
    
    handler: function () {
        notes.listNotes()
    }
})

// Read a Single Note
yargs.command({
    command: 'read',
    describe: 'read a single defined note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNotes(argv.title)
    }
})


// Prints out just the results of arguments (yarguments?)
yargs.parse()

