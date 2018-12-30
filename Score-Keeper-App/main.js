let p1Score = 0;
let p2Score = 0;

const p1ScoreTally = document.querySelector('#player-1-score-display');
const p2ScoreTally = document.querySelector('#player-2-score-display');

let gameOver = false;
let winningScore = 5;

const numInput = document.querySelector('#play-to-number');
const winningScoreDisplay = document.querySelector('#number-of-play');

const p1ScoreButton = document.querySelector('#player-1-add-score');
p1ScoreButton.addEventListener('click', function() {
	if (!gameOver && winningScore !== 0) {
		p1Score++;
		if (p1Score === winningScore) {
			p1ScoreTally.classList.add('winner');
			gameOver = true;
		}
		p1ScoreTally.textContent = p1Score;
	}
});

const p2ScoreButton = document.querySelector('#player-2-add-score');
p2ScoreButton.addEventListener('click', function() {
	if (!gameOver && winningScore !== 0) {
		p2Score++;
		if (p2Score === winningScore) {
			p2ScoreTally.classList.add('winner');
			gameOver = true;
		}
		p2ScoreTally.textContent = p2Score;
	}
});

const resetButton = document.querySelector('#reset-score');
resetButton.addEventListener('click', function() {
	reset();
});

// Changes the value of the "Best - Of - : " section
numInput.addEventListener('change', function() {
	if (this.value < 0) {
		this.value = '0';
		gameOver = true;
	}
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

/**
 * Reset Function
 * Resets the Scores and Winning Score Input.
 * Also sets the gameOver = False so that
 * we could run all the code again.
 * @return {void}
 */
function reset() {
	p1Score = 0;
	p2Score = 0;
	p1ScoreTally.textContent = p1Score;
	p1ScoreTally.classList.remove('winner');
	p2ScoreTally.textContent = p2Score;
	p2ScoreTally.classList.remove('winner');
	gameOver = false;
}
