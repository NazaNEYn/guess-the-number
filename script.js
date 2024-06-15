'use strict';

// Generate a random number between 1 and 100 (inclusive)
const randomNumber = Math.trunc(Math.random() * 100 + 1);

// Set the maximum number of allowed guesses
const maxTries = 5;

// Initialize a variable to keep track of attempts made
let tries = 0;

// For debugging purposes, you can uncomment this line to see the generated number
console.log(randomNumber);

// Add an event listener to the element with class "submit"
document.querySelector(".submit").addEventListener("click", function () {
  // Get the user's input value from the element with class "msg"
  const pickedNumber = Number(document.querySelector(".msg").value);

  // Check if the input is empty or invalid (not a number or greater than 100)
  if (!pickedNumber || pickedNumber > 100) {
    document.querySelector(".text").textContent = "Invalid number!";
  } else {
    // Increment the attempt counter
    tries++;

    // Check if the user guessed correctly
    if (pickedNumber === randomNumber) {
      document.querySelector(".text").textContent = "You got it right!";

      document.querySelector(".container").style.background = "#1c5d3b";
    } else {
      // Calculate the remaining tries
      const remainingTries = maxTries - tries;

      // Check if there are any attempts left
      if (remainingTries > 0) {
        // Provide feedback based on whether the guess was too high or too low
        if (pickedNumber > randomNumber) {
          document.querySelector(
            ".text"
          ).textContent = `Too high! You've got ${remainingTries} more tries left.`;
        } else if (pickedNumber < randomNumber) {
          document.querySelector(
            ".text"
          ).textContent = `Too low! You've got ${remainingTries} more tries left.`;
        }
      } else {
        // Display a message if the user loses (no tries left)
        // Reveal the correct answer
        document.querySelector(
          ".text"
        ).textContent = `You lost! The correct answer is ${randomNumber}.`;
        document.querySelector(".container").style.background = "#880212";
        // document.querySelector(".text").style.color = "#23252f";
      }
    }
  }
});


document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".container").style.background = "#23252f";
  document.querySelector(".text").textContent = "";
});

