// declaring some selectors for future use 
let compScore = 0 , userScore = 0 ;
let choices = document.querySelectorAll(".btn") ;
let arr = ["rock" , "scissors" , "paper"] ;
let msg = document.querySelector(".message h1") ;
let userScoreSel = document.querySelector(".your p") ;
let compScoreSel= document.querySelector(".comp p") ;
let resetSel = document.querySelector(".button") ;


// input number of turns
let totalTurns = prompt("Enter total number of Points") ;


// Your turn message 
const display = () => {
   msg.innerHTML = "Your Turn" ;
} ;




// computer choice generation using Random function
function compute() {
   let rand = (Math.floor(Math.random() * 3));
   return rand ;
}

// Final Result 
const GameOver = (userScore , compScore) => {
    if( userScore > compScore ) {
        msg.innerHTML = "Congratulation You Won" ;
        msg.style.color = "green" ;
    }

    else if( userScore < compScore ) {
        msg.innerHTML = "Better Luck Next Time" ;
        msg.style.color = "red" ;
    }

    else {
        msg.innerHTML = "Draw" ;
        msg.style.color = "yellow" ;
    }

    console.log("time to exit") ;
    choices.forEach(choice => {
        choice.disabled = true ;
        console.log(`disbaled ${choice.get}`) ;
        choice.classList.add("disableAll") ;
    })
}

// selection of choice by user and score updation
choices.forEach(choice => {
    choice.addEventListener("click" , () => {
        let id = choice.getAttribute("id") ;
        let compChoice = compute() ; 
        console.log(arr[compChoice] , " " , id) ;
        let compId = arr[compChoice] ;
        if( id === compId ) {
            console.log("you won") ;
            msg.innerHTML = "You Won in this Turn" ; 
            userScore ++ ;
            userScoreSel.innerHTML = userScore ;
        }
        else {
            msg.innerHTML = "You Lost in this Turn" ;
            compScore ++ ;
            compScoreSel.innerHTML = compScore ;
        }

        if( userScore + compScore == totalTurns ) {
            GameOver(userScore , compScore) ;
        } 
    })
}) ;

// Reset Button 

resetSel.addEventListener("click" , () => {
    totalTurns = prompt("Enter total number of Points") ;
    choices.forEach((choice) => {
       choice.classList.remove("disableAll") ;
       display() ;
       userScore = 0 , compScore = 0 ;
       userScoreSel.innerHTML = '0' ;
       compScoreSel.innerHTML = '0' ;
       choice.disabled = false ;
       msg.style.color = "black" ;
    }) 

}) ;






