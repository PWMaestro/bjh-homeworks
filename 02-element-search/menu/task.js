(function setDropDownMenuOnClickEvent() {
	Array.from(document.getElementsByClassName('menu_sub'))
		.map(item => item.closest('li.menu__item')
			.querySelector('.menu__link'))
		.forEach(item => {
			item.onclick = () => {
				item.closest('li.menu__item')
					.querySelector('.menu_sub')
					.classList.toggle('menu_active');
				return false;
			}
		});
})();
