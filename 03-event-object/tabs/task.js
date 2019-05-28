const TABS_1 = document.getElementById('tabs1');

const tabs = Array.from(TABS_1.getElementsByClassName('tab'));
const tabContent = Array.from(TABS_1.getElementsByClassName('tab__content'));

tabs.forEach((item, i) => {
	item.addEventListener('click', () => {
		TABS_1.querySelector('.tab_active')
			.classList
			.remove('tab_active');

		TABS_1.querySelector('.tab__content_active')
			.classList
			.remove('tab__content_active');

		item.classList.add('tab_active');

		tabContent[i].classList.add('tab__content_active');
	});
});