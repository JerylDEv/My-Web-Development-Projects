// alert('Connected');

// var colors = [
//     'rgb(255, 150, 0)',
//     'rgb(255, 0, 0)',
//     'rgb(200, 200, 200)',
//     'rgb(100, 150, 0)',
//     'rgb(0, 200, 250)',
//     'rgb(200, 150, 100)'
// ];

var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var headerSection = document.getElementById('header');
var resetButton = document.querySelector('#reset');
var easyButton = document.getElementById('easy');
var hardButton = document.getElementById('hard');
var numberOfSquares = 6;

easyButton.addEventListener('click', function() {
	easyButton.classList.add('selected');
	hardButton.classList.remove('selected');
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});

hardButton.addEventListener('click', function() {
	hardButton.classList.add('selected');
	easyButton.classList.remove('selected');
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
});

resetButton.addEventListener('click', function() {
	// Generate all new colors;
	colors = generateRandomColors(numberOfSquares);
	// Pick a new random color from colors Array
	pickedColor = pickColor();
	// Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// Change colors of each square
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	// Change the header section backgroundColor to Default
	headerSection.style.backgroundColor = 'coral';
	// Change the messageDisplay
	messageDisplay.textContent = '';
	// Set reset button back to default
	resetButton.textContent = 'Refresh Colors';
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// Add initial colors to the squares
	squares[i].style.backgroundColor = colors[i];

	// Add 'click' event listeners to each square
	squares[i].addEventListener('click', function() {
		// alert('Clicked the square!');

		// Grab the color picked
		// alert(this.style.backgroundColor);
		var clickedColor = this.style.backgroundColor;

		// Compare clickedColor to pickedColor
		if (clickedColor === pickedColor) {
			// alert('Correct');
			messageDisplay.textContent = 'Correct!';
			resetButton.textContent = 'Play Again?';
			changeColors(clickedColor);
			headerSection.style.backgroundColor = clickedColor;
		} else {
			// alert('Wrong');
			this.style.backgroundColor = '#373e48';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColors(color) {
	// Loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// Change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	// Pick a random number
	var random = Math.floor(Math.random() * colors.length);
	// Use the number to access the color out of the Colors Array.
	return colors[random];
}

function generateRandomColors(num) {
	// Make an Array
	var arr = [];
	// Add num random colors to Array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	// Return the Array
	return arr;
}

function randomColor() {
	// Pick a "red" from 0 to 255
	var red = Math.floor(Math.random() * 256);
	// Pick a "green" from 0 to 255
	var green = Math.floor(Math.random() * 256);
	// Pick a "blue" from 0 to 255
	var blue = Math.floor(Math.random() * 256);
	// random rgb color
	var rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
	// Return random rgb color
	return rgbColor;
}
