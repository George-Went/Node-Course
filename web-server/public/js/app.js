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

var weatherForm = document.querySelector('form')

weatherForm.addEventListener(`submit`, (e) => {
    e.preventDefault()

    console.log('testing')
})




