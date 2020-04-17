const yargs = require('yargs')

// ---------
// Yargs
// Node Aguments (but pirates because ??? )
// Yargs provide argument parsing 
// ---------

console.log(process.argv) // basic node proccess of argv

console.log(yargs.argv) // yargs parsed version of argv

// Result of yargs
// { _: [], '$0': 'yargs.js' }
// _ = command
// [] = object
// $: = object.string value

// basic yargs command
yargs.command({
    command: 'hello',
    describe: 'says hello world',
    handler: function () {
        console.log("hello world")
    }
})

// alternitavly 
// (yargs doc examples) 
if (yargs.ships > 3) {
    console.log('Plunder more ships!');
} else {
    console.log('we have got what we need');
}

console.log(yargs.argv) 
// prints out the yarg argumeng inputs(commands) / objects([]) / variables($) 
// yargs.argumentVariables (argvs)

// Prints out just the results of arguments (yarguments?)
yargs.parse()