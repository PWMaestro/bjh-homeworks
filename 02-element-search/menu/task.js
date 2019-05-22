(function setDropDownMenuOnClickEvent() {
	Array.from(document.getElementsByClassName('menu_sub'))
		.map(item => item.closest('li.menu__item')
			.querySelector('.menu__link'))
		.forEach(item => {
			item.onclick = () => {
				closeOtherSubMenus(item);
				item.closest('li.menu__item')
					.querySelector('.menu_sub')
					.classList.toggle('menu_active');
				return false;
			}
		});
})();

function closeOtherSubMenus(currentMenuItem) {
	currentMenuItem.closest('li.menu__item')
		.querySelector('.menu_sub')
		.classList.add('only');

	Array.from(currentMenuItem.closest('.menu_main').querySelectorAll('.menu_sub'))
		.forEach((item) => {
			if (!item.classList.contains('only') && item.classList.contains('menu_active')) {
				item.classList.remove('menu_active');
			}
		});

	currentMenuItem.closest('li.menu__item')
		.querySelector('.menu_sub')
		.classList.remove('only');
}