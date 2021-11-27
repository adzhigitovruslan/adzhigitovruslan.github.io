document.querySelectorAll('.accordion__item-trigger').forEach((item) => 
	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if (parent.classList.contains('_active')) {
			parent.classList.remove('_active')
		} else {
			document.querySelectorAll('.accordion__item').forEach((child) => 
			child.classList.remove('_active'))

			parent.classList.add('_active');
		}
	})
)