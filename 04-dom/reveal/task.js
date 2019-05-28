const appearElements = Array.from(document.getElementsByClassName('reveal'));

document.addEventListener('scroll', () => {
	appearElements.forEach((item, i) => {
		if (item.getBoundingClientRect().top < window.innerHeight &&
			item.getBoundingClientRect().top > 0) {
			appearElements[i].classList.add('reveal_active');
		} else {
			appearElements[i].classList.remove('reveal_active');
		}
	});
});