//----------------------------------------------------------------------
// Default Parameters
//----------------------------------------------------------------------

const greeter = (name) => {
    console.log(`Hello ` + name)
}

greeter(`George`)

// When this is run `undefined` is the default parameter of the value
greeter() 

// ---------------------------------------------------------------------

// You can set default values so that the default parameter is not `undefined`
const meeter = (name = `user`) => { 
    console.log('Hello ' + name)
}
meeter()

//----------------------------------------------------------------------
// Default Parameters within objects
//----------------------------------------------------------------------
const product = {
    label: 'notebook',
    price: 3,
    stock: 201,
    salePrice: undefined 
}

// We can set the default price for object as well
// In this case, the default value is 0 for stock
const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order: ') // 

