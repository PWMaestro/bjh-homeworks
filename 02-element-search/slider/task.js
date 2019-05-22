const nextBtn = Array.from(document.getElementsByClassName('slider__arrow_next'))[0],
	previousBtn = Array.from(document.getElementsByClassName('slider__arrow_prev'))[0];

nextBtn.onclick = () => {
	const activeImg = document.querySelector('.slider__items  .slider__item_active'),
		activeDot = document.querySelector('.slider__dots .slider__dot_active');

	activeImg.classList.remove('slider__item_active');
	activeDot.classList.remove('slider__dot_active');

	if (activeImg.nextElementSibling) {
		activeImg.nextElementSibling.classList.add('slider__item_active');
		activeDot.nextElementSibling.classList.add('slider__dot_active');
	} else {
		document.querySelector('.slider__items  .slider__item')
			.classList
			.add('slider__item_active');

		document.querySelector('.slider__dots  .slider__dot')
			.classList
			.add('slider__dot_active');
	}
}

previousBtn.onclick = () => {
	const activeImg = document.querySelector('.slider__items  .slider__item_active'),
		activeDot = document.querySelector('.slider__dots .slider__dot_active');

	activeImg.classList.remove('slider__item_active');
	activeDot.classList.remove('slider__dot_active');

	if (activeImg.previousElementSibling) {
		activeImg.previousElementSibling.classList.add('slider__item_active');
		activeDot.previousElementSibling.classList.add('slider__dot_active');
	} else {
		Array.from(document.querySelectorAll('.slider__items  .slider__item'))
			.pop()
			.classList
			.add('slider__item_active');

		Array.from(document.querySelectorAll('.slider__dots  .slider__dot'))
			.pop()
			.classList
			.add('slider__dot_active');
	}
}

const dots = Array.from(document.querySelectorAll('.slider__dots .slider__dot')),
	images = Array.from(document.querySelectorAll('.slider__items .slider__item'));

dots.forEach((item, i) => {
	item.onclick = () => {
		document.querySelector('.slider__dots .slider__dot_active')
			.classList
			.remove('slider__dot_active');

		item.classList.add('slider__dot_active');

		document.querySelector('.slider__items  .slider__item_active')
			.classList
			.remove('slider__item_active');

		images[i].classList.add('slider__item_active');
	}
});
