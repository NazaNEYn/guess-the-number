'use strict';

// Generate a random number between 1 and 100 (inclusive)
// we used let because we need to reassign
// the variable on the reset button
let randomNumber = Math.trunc(Math.random() * 100 + 1);
console.log(randomNumber);

// Set the maximum number of allowed guesses
const maxTries = 5;

// Initialize a variable to keep track of attempts made
let tries = 0;

const displayMessage = function (message) {
  document.querySelector(".text").textContent = message;
};

// Add an event listener to the element with class "submit"
document.querySelector(".submit").addEventListener("click", function () {
  // Get the user's input value from the element with class "msg"
  const pickedNumber = Number(document.querySelector(".msg").value);

  // Check if the input is empty or invalid (not a number or greater than 100)
  if (!pickedNumber || pickedNumber > 100) {
    displayMessage("Invalid number!");
  } else {
    // Increment the attempt counter
    tries++;

    // Check if the user guessed correctly
    if (pickedNumber === randomNumber) {
      displayMessage("You got it right!");

      document.querySelector(".container").style.background = "#1c5d3b";
    } else {
      // Calculate the remaining tries
      const remainingTries = maxTries - tries;

      // Check if there are any attempts left
      if (remainingTries > 0) {
        // Provide feedback based on whether the guess was too high or too low
        if (pickedNumber > randomNumber) {
          displayMessage(
            `Too high! You've got ${remainingTries} more tries left.`
          );
        } else if (pickedNumber < randomNumber) {
          displayMessage(
            `Too low! You've got ${remainingTries} more tries left.`
          );
        }
      } else {
        // Display a message if the user loses (no tries left)
        // Reveal the correct answer
        displayMessage(`You lost! The correct answer is ${randomNumber}.`);
        document.querySelector(".container").style.background = "#880212";
        // document.querySelector(".text").style.color = "#23252f";
      }
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  // Reload the whole page
  // window.location.reload();

  document.querySelector(".container").style.background = "#23252f";
  displayMessage("Start guessing...");
  document.querySelector(".msg").value = "";

  tries = 0;

  // we reassigned the variable
  randomNumber = Math.trunc(Math.random() * 100 + 1);
});
