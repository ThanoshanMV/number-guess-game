let randomNumber = Math.floor(Math.random() * 100) + 1; //creates a random number between 1 to 100.
let turnNumber = 1; //Sets initial turn number to one.

/* The below three variables are each made to store a reference to the results paragraphs in our HTML, and are used to insert values into the paragraphs later on in the code:*/
let guessHistory = document.getElementById("guessHistory");
let lastResult = document.getElementById("lastResult");
let hint = document.getElementById("hint");

/*The next two variables store references to the form text input and submit button and are used to control submitting the guess later on.*/
let guessField = document.getElementById("guess"); //getting the number value from input field.
let submitBtn = document.getElementById("submit");

function checkGuess() {
  let userGuess = guessField.value; //setting the input field value to userGuess
  if (turnNumber === 1) {
    guessHistory.textContent = "Previous guess: ";
  }
  guessHistory.textContent += userGuess + " ";

  if (userGuess == randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!!";
    lastResult.style.color = "green";
    hint.textContent = "";
    setGameOver();
  } else if (turnNumber === 10) {
    lastResult.textContent = "Game Over!";
    lastResult.style.color = "Red";
    hint.textContent = "";
    setGameOver();
  } else if (userGuess <= 0 || userGuess > 100) {
    lastResult.textContent = "The number should between 1 and 100!!!";
    lastResult.style.color = "Red";
  } else {
    lastResult.textContent = "Wrong. Please try again ;(";
    lastResult.style.color = "Red";
    if (userGuess < randomNumber) {
      hint.textContent = "Last guess was too low. Aim HIGHER!";
    } else {
      hint.textContent = "Last guess was too high. Aim LOWER!";
    }
  }
  guessField.value = 0;
  turnNumber++;
  guessField.focus();
}
submitBtn.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  submitBtn.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  turnNumber = 1;

  let displayResults = document.querySelectorAll(".displayResults p");
  for (let i = 0; i < displayResults.length; i++) {
    displayResults[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  submitBtn.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";
}
