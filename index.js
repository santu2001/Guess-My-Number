"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".button2").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  if (!guess) {
    document.querySelector(".start-guessing").textContent = "No Number";
  } else if (number == guess) {
    document.querySelector(".start-guessing").textContent = "Correct Number";
    document.querySelector(".p3").textContent = number;

    document.querySelector("body").style.backgroundColor = "#60b341";
    document.querySelector("input").style.backgroundColor = "#60b341";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    } else {
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector(".highscore").textContent = score;
  } else if (guess != number) {
    if (score > 1) {
      document.querySelector(".start-guessing").textContent =
        guess > number ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".start-guessing").textContent =
        "You lost the game!";
    }
    // } else if (guess > number) {
    //   if (score > 1) {
    //     document.querySelector(".start-guessing").textContent = "Too high";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".start-guessing").textContent =
    //       "You lost the game!";
    //   }
  }
});

//reset game
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".start-guessing").textContent = "Start guessing....";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".p3").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("input").style.backgroundColor = "black";
});
