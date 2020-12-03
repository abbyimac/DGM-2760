document.querySelector('header > h1').innerText = "Guessing Game";
document.querySelector('header > h2').innerText = "Loops";


// pick a random number between 0 and 16
// let correctNumber = Math.floor(Math.random() * 15) - another way to get random number and make sure to increment correctNumber +=

let correctNumber = getRandomIntInclusive(1, 15)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive 
}

console.log(`The correct number is ${correctNumber}`)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
let gameOver = false

function evalGuess() {

    if (gameOver) {
        return
    }
    totalGuesses++ // totalGuesses = totalGuesses + 1
    gamerGuess = document.querySelector('#guess').value
    //console.log(`totalGuesses,correctNumber, gamerGuess ${totalGuesses} ${correctNumber} ${gamerGuess}`)

    const feedback = document.querySelector('#feedback')

    let imagePath = '#'
    const ribbon = document.querySelector('#ribbon')

    if (gamerGuess == correctNumber) {
        const awardImage = document.createElement('img') // Creates an <img> element
        awardImage.setAttribute('id', 'award')
        //console.log(`gamerGuess is equal to the correctNumber`)
        feedback.innerText = 'You win!'
        giveAward()
        awardImage.setAttribute('src', imagePath)
        ribbon.appendChild(awardImage)
        gameOver = true
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = `Too high, try again!`
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = `Too low, try again!`
    } else {
        feedback.innerText = `Please choose a number between 1 and 15 and try again.`
        totalGuesses--
    }

    document.querySelector('#attempts').innerText = totalGuesses

    function giveAward() {
        console.log('congratulations!')
        switch (totalGuesses) {
            case 1:
            case 2:
            case 3:
                imagePath = 'images/ribbons-01.png'
                gameOver = true
                break;
            case 4:
            case 5:
            case 6:
                imagePath = 'images/ribbons-02.png'
                gameOver = true
                break
            default:
                imagePath = 'images/ribbons-03.png'
                gameOver = true
                break
        }
    }

}