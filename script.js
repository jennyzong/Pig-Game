
const diceEl = document.querySelector('.dice');
const player0 = document.querySelector('.player0');
const player1 = document.querySelector('.player1');

const player0Score = document.querySelector('.player0Score');
const player1Score = document.querySelector('.player1Score');
const currentScore0El = document.querySelector('.current-score0');
const currentScore1El = document.querySelector('.current-score1');


const btnHold = document.querySelector('.hold');
const btnNewGame = document.querySelector('.newGame')
const btnRollDice = document.querySelector('.rollDice');

let playerScore, currentScore, activePlayer, playing;

const init = function(){
    playerScore = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    activePlayer = 0;
    player0Score.textContent = 0;
    player1Score.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0.classList.remove('winner');
    player1.classList.remove('winner');
    player0.classList.add('active-player');
    player1.classList.remove('active-player');
}

init();

const switchPlayer = function(){
    currentScore = 0; 
    document.querySelector(`.current-score${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('active-player');
    player1.classList.toggle('active-player');
}

btnRollDice.addEventListener('click', function(){
    if(playing){
    diceEl.classList.remove('hidden');
    let randomNum = Math.floor(Math.random() * 6) + 1;
    diceEl.src = `./images/dice-${randomNum}.png`;
    if(randomNum !== 1){ 
        currentScore += randomNum;
        document.querySelector(`.current-score${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer();
    }
    }
})

btnHold.addEventListener('click', function(){
    if(playing){
        playerScore[activePlayer] += currentScore;
        console.log(playerScore[activePlayer])
        document.querySelector(`.player${activePlayer}Score`).textContent = playerScore[activePlayer]; 
        if (playerScore[activePlayer] >= 100){
            playing = false;
            document.querySelector(`.player${activePlayer}`).classList.add('winner');
            document.querySelector(`.player${activePlayer}`).classList.remove('activePlayer');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    
    }
})

btnNewGame.addEventListener('click',init)