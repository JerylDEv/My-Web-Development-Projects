var p1Score = 0;
var p2Score = 0;

var p1ScoreTally = document.querySelector('#player-1-score-display');
var p2ScoreTally = document.querySelector('#player-2-score-display');

var gameOver = false;
var winningScore = 5;

var numInput = document.querySelector('#play-to-number');
var winningScoreDisplay = document.querySelector('#number-of-play');

var p1ScoreButton = document.querySelector('#player-1-add-score');
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

var p2ScoreButton = document.querySelector('#player-2-add-score');
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

var resetButton = document.querySelector('#reset-score');
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
