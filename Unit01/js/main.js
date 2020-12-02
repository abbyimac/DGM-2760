
document.querySelector('#company').innerText = "Joe's Bed and Breakfast";

document.querySelector('header > h2').innerText = "Best B&B in Northern Utah";

let userName = prompt("What is your name?")

// STRING CONCATENATION
//let message = "Hello " + userName + ", welcome to your new favorite weekend getaway!"


// TEMPLATE STRINGS
let message = `Hello ${userName}, welcome to your new favorite weekend getaway!`

document.querySelector('#greeting').innerText = message;