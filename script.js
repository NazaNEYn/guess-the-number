"use strict";

const randomNumber = Math.trunc(Math.random() * 100);
const maxTries = 5; // Maximum allowed guesses
let tries = 0; // Initialize attempts counter

console.log(randomNumber);

document.querySelector(".submit").addEventListener("click", function () {
  const pickedNumber = Number(document.querySelector(".msg").value);

  if (!pickedNumber) {
    document.querySelector(".text").textContent = "Invalid number!";
  } else if (pickedNumber > 100) {
    document.querySelector(".text").textContent = "Invalid number!";
  } else {
    tries++;

    if (pickedNumber === randomNumber) {
      document.querySelector(".text").textContent = "You got it right! 🥳";
    } else {
      const remainingTries = maxTries - tries;

      if (remainingTries > 0) {
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
        document.querySelector(
          ".text"
        ).textContent = `You lost! The correct answer is ${randomNumber}.`;
      }
    }
  }
});
