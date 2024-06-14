const randomNumber = Math.trunc(Math.random() * 100);
console.log(randomNumber);

document.querySelector(".submit").addEventListener("click", function () {
  const pickedNumber = Number(document.querySelector(".msg").value);

  if (!pickedNumber) {
    document.querySelector(".text").textContent = "It is not a valid number";
  } else if (randomNumber === pickedNumber) {
    document.querySelector(".text").textContent = "You got it right! 🥳";
  } else {
    document.querySelector(".text").textContent = "Try again!!";
  }
});
