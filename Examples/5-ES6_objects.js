// Object Property shorthand

const name = 'George'
const userAge = 24

//We have an object 'user'
const user ={ 
    name,               // we can use the shorthand syntax here because the var 'name' and object 'name' are the same
    age: userAge,
    location: 'London'
}

console.log(user)

// The shorthand syntac can be used when the property name and 
// the variable name are *the same*  

//Object destructuring 

const product = {
    label: 'notebook',
    price: 3,
    stock: 201,
    salePrice: undefined 
}

// const label = product.label // we can directly link a new variable to a object property
// const stock = product.stock

// ---------------------------
//Destructuring syntax
// ---------------------------

const {label, stock,rating} = product // (this is basically an object being created but the syntax reversed)
console.log(label)     // we can 'deconstruct' the product object back into its component variablesS
console.log(stock)
console.log(rating)    // we can add new variables to the object, but their values are undefined


const transaction = (type, {label, stock}) => { // we never get access to the whole object, only the values that we pick
    console.log(type, label, stock)
}

transaction('order: ', product) // will produce order: notebook 201