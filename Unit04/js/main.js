function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1, 5)
let day = getRandomIntInclusive(1, 30)

function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = 'January'
            break;
        case 2:
            name = 'February'
            break;
        case 3:
            name = 'March'
            break;
        case 4:
            name = 'April'
            break;
        case 5:
            name = 'May'
            break;
        case 6:
            name = 'June'
            break;
        case 7:
            name = 'July'
            break;
        case 8:
            name = 'August'
            break;
        case 9:
            name = 'September'
            break;
        case 10:
            name = 'October'
            break;
        case 11:
            name = 'November'
            break;
        case 12:
            name = 'December'
            break;
        default:
            name = 'Not a month'
            break;
    }
    return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = 'be given a generous gift.'
            break;
        case 2:
            message = 'run into an old friend.'
            break;
        case 3:
            message = 'discover a great new restaurant.'
            break;
        case 4:
            message = 'be given an unexpected promotion.'
            break;
        case 5:
            message = 'have a bad hair day.'
            break;
        default:
            message = 'some sort of error occurred'
            break;
    }
    return message
}

const monthName = getMonthName(month)
const fateGenerated = getFortune(fate)

let fortuneRevealed = `On ${monthName} ${day}, you will ${fateGenerated}`


function tellFortune() {
    document.querySelector('#fortune').innerText = fortuneRevealed
}

const myButton = document.querySelector('#button')
myButton.addEventListener('click', tellFortune)