// alert('CONNECTED');

var allLi = document.querySelectorAll('li');

for (var i = 0; i < allLi.length; i++) {
	allLi[i].addEventListener('mouseover', function() {
		// console.log('mouse over');
		this.classList.add('selected-class');
	});

	allLi[i].addEventListener('mouseout', function() {
		this.classList.remove('selected-class');
	});

	allLi[i].addEventListener('click', function() {
		this.classList.toggle('done-class');
	});
}
