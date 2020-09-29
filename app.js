const guessNumber = document.querySelector("#guess-number");
const submitBtn = document.querySelector(".submit-btn");
const message = document.querySelector(".message");
const game = document.querySelector(".game");

const min = 1,
      max = 10;

let guessesLeft = 3;

const winningNum = Math.floor(Math.random() * max) + 1;

submitBtn.addEventListener("click", function(e){
    const guess = parseInt(guessNumber.value);
    if(isNaN(guess) || guess > max || guess < min){
        showMsg("Don't be a smartass. Please enter a number from 1 to 10.", "red");
        guessNumber.placeholder = "Try again...";
    }else{
        if(guess === winningNum){
            showMsg(`GAME OVER. You won! The correct number is ${winningNum}.`, "green");
            resetGame();
        }else{
            guessesLeft--;
            if(guessesLeft <= 0){
                showMsg(`GAME OVER. You lose! The correct number is ${winningNum}.`, "red");
                resetGame();
            }else{
                showMsg(`Nope. ${guess} is not the correct number. You have ${guessesLeft} guesses left. Try again.`, "red");
                guessNumber.value = "";
                guessNumber.placeholder = "Try again...";
            }
        }
    }
    e.preventDefault();
});

game.addEventListener("mousedown", function(e){
    if(e.target.className.includes("play-again")){
        document.location.reload();
    }
})

function showMsg(msg, color){
    message.innerText = msg;
    message.style.color = color;
    guessNumber.style.borderColor = color;
}

function resetGame(){
    guessNumber.disabled = true;
    submitBtn.innerText = "Play Again?";
    submitBtn.className += " play-again";
}
