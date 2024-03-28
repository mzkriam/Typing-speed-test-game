let words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

let lvl = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
}

let lvlNameSpan = document.querySelector(".container .message .lvl");
let secondsSpan = document.querySelector(".container .message .seconds");

let startButton = document.querySelector(".start");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let leftTime = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

let defaultLevelName = "Easy";
let defaultSecond = lvl[defaultLevelName];

lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultSecond;
scoreTotal.innerHTML = words.length;
leftTime.innerHTML = defaultSecond;

input.onpaste = function () {
    return false;
}

startButton.onclick = function () {
    startButton.remove();
    input.focus();
    genWord();
}
function genWord() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let wordIndex = words.indexOf(randomWord);
    words.splice(wordIndex, 1);
    theWord.innerHTML = randomWord;
    upcomingWords.innerHTML = "";
    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let text = document.createTextNode(words[i]);
        div.appendChild(text);
        upcomingWords.prepend(div);
    }
    startPlay();
}

function startPlay() {
    leftTime.innerHTML = defaultSecond;
    let start = setInterval(function () {
        leftTime.innerHTML--;
        if (leftTime.innerHTML === "0") {
            clearInterval(start);
            if (input.value.toLowerCase() === theWord.innerHTML.toLowerCase()) {
                input.value = "";
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    genWord();
                } else {
                    let span = document.createElement("span");
                    span.className = "good";
                    span.appendChild(document.createTextNode("Congratz"));
                    finishMessage.appendChild(span);
                }
            } else {
                let span = document.createElement("span");
                span.className = "bad";
                span.appendChild(document.createTextNode("Game Over"));
                finishMessage.appendChild(span);
            }
        }
    }
        , 1000)
};