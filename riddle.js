// Array of riddles
const riddles = [
    { question: "What has a head and a tail but no body?", answer: "coin" },
    { question: "What gets wetter as it dries?", answer: "towel" },
    { question: "What has keys but can't open locks?", answer: "piano" },
    { question: "What has hands but cannot clap?", answer: "clock" }
];

let currentRiddleIndex = -1;

// declare several variables to store references to elements in the HTML document 
const riddleElement = document.getElementById("riddle");
const answerInput = document.getElementById("answerInput");
const resultElement = document.getElementById("result");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");


//  function to display a random riddle from the riddles array.
function displayRiddle() {
    currentRiddleIndex = Math.floor(Math.random() * riddles.length);
    riddleElement.textContent = riddles[currentRiddleIndex].question;
}


//  function compares the user's input (converted to lowercase) with the correct answer of the riddle.
// If the answer is correct, it displays "Correct!" in the resultElement. If it's wrong, it displays "Wrong! Try again."
function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase().trim();
    const correctAnswer = riddles[currentRiddleIndex].answer;

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong! Try again.";
    }
}


// Function to reveal the correct answer
function revealAnswer() {
    resultElement.textContent = `The correct answer is: ${riddles[currentRiddleIndex].answer}`;
    revealBtn.style.display = "none"; // Hide the reveal button after revealing the answer
}

// Event listeners added to buttons to ellicit responses
checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", () => {
    displayRiddle();
    resultElement.textContent = "";
});

revealBtn.addEventListener("click", revealAnswer);

// Initialize the game
displayRiddle();