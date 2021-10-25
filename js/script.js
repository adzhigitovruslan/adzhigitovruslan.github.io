const mainForm = document.forms.main;
const mainFormInput = document.querySelector('.search-form__input');
const mainFormInputPlaceholder = mainFormInput.placeholder;
mainFormInput.addEventListener('focus', function(e) {
	mainFormInput.placeholder = '';
});
mainFormInput.addEventListener('blur', function(e) {
	mainFormInput.placeholder = mainFormInputPlaceholder;
	mainFormInput.classList('search-form__error').remove();
});

const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
	const menuList = document.querySelector('.menu__list');
	const iconItem = document.querySelectorAll('.icon-item');
	iconMenu.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock');
		menuList.classList.toggle('show');
		iconItem.forEach(element => {
			element.classList.toggle('_active');
		})
	});
}
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  })
}