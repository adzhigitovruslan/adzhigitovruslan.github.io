var percent = 20;

var elementInput = document.querySelector('input[type=checkbox]');

var basic = document.querySelector('#basic');
var professional = document.querySelector('#professional');
var basicXl = document.querySelector('#basicXL');

var basicContent = basic.textContent;
var professionalContent = professional.textContent;
var basicXlContent = basicXl.textContent;

basicNew = parseFloat(basicContent * 12 - ((basicContent * 12) / 100 * percent)).toFixed();

professionalNew = parseFloat(professionalContent * 12 - ((professionalContent * 12) / 100 * percent)).toFixed();

basicXlNew = parseFloat(basicXlContent * 12 - ((basicXlContent * 12) / 100 * percent)).toFixed();

	elementInput.addEventListener('change', () => {
		if (!elementInput.checked) {		
			basic.textContent = basicNew;
			professional.textContent = professionalNew;
			basicXl.textContent = basicXlNew;
		} else {
			basic.textContent = `${basicContent}`;
			professional.textContent = `${professionalContent}`;
			basicXl.textContent = `${basicXlContent}`;
		}
	});

	const textAnimation = document.querySelectorAll('.item__price-content');


	elementInput.addEventListener('click', function() {
		textAnimation.forEach(function(item) {
		   item.classList.remove('_active');
		   setTimeout(e=>{item.classList.add("_active")},2) 
		})
		
	});