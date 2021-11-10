//Меню бургер 
const iconMenu = document.querySelector('.burger__logo');

if (iconMenu) {
	const menuBody = document.querySelector('.sidebar');
	iconMenu.addEventListener('click', function(e) {
		menuBody.classList.toggle('_active');
	});
}
