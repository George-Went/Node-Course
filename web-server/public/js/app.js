// This file is for client side javascript
// You can see the console log in more tools > developer tools 

console.log('Client Side javascript file is loaded')

// Function gets puzzle json object from the url, then prints it into the clientside console
fetch('http://localhost:3000/weather?address=london').then(response => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        }
        else {
            console.log(data.address)
            console.log(data.forecast)
            console.log(data.location)
        }
    })
})

// ---------------------------------------------------------------
// Weather / Location API connections 
// ---------------------------------------------------------------
var weatherForm = document.querySelector('form') 
var searchElement = document.querySelector('input') // input value is assigned to the var 'searchElement

var messageOne = document.querySelector('#message-1') // the '#' allows us to select via ID
var messageTwo = document.querySelector('#message-2')
var messageThree = document.querySelector('#message-3')
var messageFour = document.querySelector('#message-4')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener(`submit`, (e) => {
    e.preventDefault()// prevents the whol page from reloading when we click the search button

    let location = searchElement.value // search result is assinged to the var 'location'

    console.log('testing')
    console.log('http://localhost:3000/weather?address=' + location)

    fetch('http://localhost:3000/weather?address=' + location).then(response => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
            messageOne.textContent = data.error
            messageTwo.textContent = ''
            messageThree.textContent = ''
            messageFour.textContent = ''
            
        }
        else {
            console.log(data.address)
            console.log(data.forecast)
            console.log(data.location)
            messageOne.textContent =''
            messageTwo.textContent = data.address
            messageThree.textContent =  data.forecast
            messageFour.textContent = data.location
        }
    })
})


})




