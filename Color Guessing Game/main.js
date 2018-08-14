// alert('Connected');

var colors = [
    'rgb(255, 150, 0)',
    'rgb(255, 0, 0)',
    'rgb(200, 200, 200)',
    'rgb(100, 150, 0)',
    'rgb(0, 200, 250)',
    'rgb(200, 150, 100)'
];

var squares = document.querySelectorAll('.square');
var pickedColor = colors[4];
var colorDisplay = document.querySelector('colorDisplay');

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
            alert('Correct');
        }
        alert('Wrong');
    });
}