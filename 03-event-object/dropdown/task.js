const dropDownMenu = Array.from(document.getElementsByClassName('dropdown'));

dropDownMenu.forEach(item => {
	item.querySelector('.dropdown__value')
		.addEventListener('click', (event) => {
			event.target.parentElement
				.querySelector('.dropdown__list')
				.classList
				.toggle('dropdown__list_active');
		});

	Array.from(item.getElementsByClassName('dropdown__item'))
		.forEach(item => {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				const currentMenu = event.target.closest('.dropdown');
				currentMenu.querySelector('.dropdown__value')
					.textContent = event.target.textContent;
				currentMenu.querySelector('.dropdown__list')
					.classList
					.remove('dropdown__list_active');
			});
		});
});