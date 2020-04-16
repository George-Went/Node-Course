const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

console.log("run")

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
    builder: {
        list: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log("list all notes")
    }
})

// Read a Single Note
yargs.command({
    command: 'read',
    describe: 'read a single defined note',
    builder: {
        list: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log("list all notes")
    }
})

console.log(yargs.argv) 
// prints out the yarg argumeng variables 'yarguments?'
// yargs.argumentVariables (argvs)