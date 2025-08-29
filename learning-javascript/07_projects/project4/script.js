const randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    });
}

//validateGuess method ye validation karega ka value 1 se 100 ke bich main hai ya nahi
validateGuess = (guess)=>{
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number more than 1')
    } else if(guess > 100){
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// checkGuess method ye check krega ki value random no. k equale to nahi hai agar hai to displayMessage method ka use kar k btayega ki aap jit gye 
checkGuess = (guess) =>{
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is TOO Low`)
    } else if(guess > randomNumber){
        displayMessage(`Number is TOO High`)
    }
}

// ye values ko clean krega kyuki next value input karni hai jitne guess hai or remaining guess hai unhe update krega
cleanUpGuess = (guess) => {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

displayMessage = (message) =>{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

newGame = () =>{
    //
}

endGame = () =>{
    //
}
