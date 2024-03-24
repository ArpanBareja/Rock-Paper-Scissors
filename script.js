// declaring some selectors for future use
let compScore = 0,
  userScore = 0;
let choices = document.querySelectorAll(".btn");
let arr = ["rock", "scissors", "paper"];
let msg = document.querySelector(".message h1");
let userScoreSel = document.querySelector(".your p");
let compScoreSel = document.querySelector(".comp p");
let resetSel = document.querySelector(".button");

// input number of turns
let totalTurns = prompt("Enter total number of Points");

// Your turn message
const display = () => {
  msg.innerHTML = "Your Turn";
};

// computer choice generation using Random function
function compute() {
  let rand = Math.floor(Math.random() * 3);
  return rand;
}

// Final Result
const GameOver = (userScore, compScore) => {
  if (userScore > compScore) {
    msg.innerHTML = "Congralution You Won";
    msg.style.color = "green";
  } else if (userScore < compScore) {
    msg.innerHTML = "Better Luck Next Time";
    msg.style.color = "red";
  } else {
    msg.innerHTML = "Draw";
    msg.style.color = "#AF4BE5";
  }

  console.log("time to exit");
  choices.forEach((choice) => {
    choice.disabled = true;
    console.log(`disbaled ${choice.get}`);
    choice.classList.add("disableAll");
  });
};

// computing single time result
function checkResult(userId, compId) {
  console.log(userId, " ", compId);
  if (userId == compId) return 0;

  if (userId == "paper" && compId == "rock") return 1;
  if (userId == "rock" && compId == "scissors") return 1;
  if (userId == "scissors" && compId == "paper") return 1;

  return -1;
}

// selection of choice by user and score updation
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let id = choice.getAttribute("id");
    let compChoice = compute();
    let compId = arr[compChoice];
    let compChoiceSel = document.querySelector(`#${compId}`);

    // unset any border color
    setTimeout(() => {
      choices.forEach((choice) => {
        choice.style.border = "0";
      });
    }, 500);

    //computing single time result
    let result = checkResult(id, compId);
    console.log(result);
    if (result === 1) {
      console.log("you won");
      msg.innerHTML = "You Won in this Turn";
      userScore++;
      userScoreSel.innerHTML = userScore;
      choice.style.border = "10px solid green";
      compChoiceSel.style.border = "10px solid red";
    } else if (result === -1) {
      msg.innerHTML = "You Lost in this Turn";
      compScore++;
      compScoreSel.innerHTML = compScore;

      // set color for user and computer choice
      choice.style.border = "10px solid red";
      compChoiceSel.style.border = "10px solid green";
    } else {
      msg.innerHTML = "Draw in this Turn";
      choice.style.border = "10px solid #A90AFF";
    }

    if (userScore + compScore == totalTurns) {
      GameOver(userScore, compScore);
    }
  });
});

// Reset Button
resetSel.addEventListener("click", () => {
  totalTurns = prompt("Enter total number of Points");
  choices.forEach((choice) => {
    choice.classList.remove("disableAll");
    display();
    (userScore = 0), (compScore = 0);
    userScoreSel.innerHTML = "0";
    compScoreSel.innerHTML = "0";
    choice.disabled = false;
    msg.style.color = "black";
  });
});
