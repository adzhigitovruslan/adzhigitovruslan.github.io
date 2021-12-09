const board = document.querySelector('#board');
const squares_number = 400;
const colors = ['#20B2AA', '#4682B4', '#FF4500', '#FF00FF', '#7B68EE', '#800080', '#BC8F8F', '#FAEBD7', '#008080', '#ADFF2F']

for (let i=0; i < squares_number; i++) {
	const square = document.createElement('div');
	square.classList.add('square');


	square.addEventListener('mouseover', function () {
		setColor(square)
	})

	square.addEventListener('mouseleave', function () {
		removeColor(square)
	})

	board.append(square);
}
function getRandomColor() {
const index = Math.floor(Math.random() * colors.length)
return colors[index];
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
	element.style.backgroundColor = 'darkcyan'
	element.style.boxShadow = `0 0 2px #000`
}