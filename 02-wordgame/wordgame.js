let json;
const body = document.body;
const guessField = document.getElementById("guess-field");
const feedbackText = document.getElementById("feedback-text")

// Returns a random integer between min and max
//   [min, min+1, min+2, ... , max-1, max]
function randInt(min, max) {
    let rand = Math.random();
    rand = rand * (max - min + 1);
    rand = rand + min;
    rand = Math.floor(rand);
    return rand;
}

function loadGame() {
    fetch('./words_dictionary.json')
        .then(response => response.text())
        .then(text => {
            // Split the text by lines to get individual words
            json = JSON.parse(text);
            console.log('Words loaded!');
            wordsLoaded();
        })
        .catch(error => {
            console.error('Error fetching words: ', error);
        });
        randomBackgroundColor();
}

function randomBackgroundColor() {
    let random = randInt(180, 280);
    let colorString = `hsl(${random}, 90%, 60%)`;
    body.style.backgroundColor = colorString;
}
const randomWord = document.getElementById("random-word");
let allWords = [];
let fiveLetterWords = [];
let secret = "";
function wordsLoaded() {
    allWords = Object.keys(json)
    let randomIndex = randInt(0, allWords.length-1);
    randomWord.innerHTML = allWords[randomIndex];

    for(let i = 0; i < allWords.length; i++) {
        let word = allWords[i];
        if(word.length != 5) continue;
        fiveLetterWords.push(word);
    }
    
randomIndex = randInt(0, fiveLetterWords.length-1);
secret = fiveLetterWords[randomIndex].toLowerCase();

}

function changeGuess() {
    let guess = guessField.value.toLowerCase();
    if(guess.length < 5) return;
    if(guess.length > 5) {
        guessField.value = "";
        return;
    }
    console.log(`Guess: "${guess}" and Secret: "${secret}"`)

    if(!json.hasOwnProperty(guess)) {
        feedbackText.innerHTML += `"${guess}" is not a word. Try again.<br>`;
        guessField.value = "";
        return;
    }
    let correctPlacement = 0;
    for(let i = 0; i < 5; i++) {
        if(guess[i] == secret[i]) {
            correctPlacement++;
        }
    }
    feedbackText.innerHTML += `"${guess}" has "${correctPlacement}"letter(s) in the correct place.<br>`;
    guessField.value = "";
}



