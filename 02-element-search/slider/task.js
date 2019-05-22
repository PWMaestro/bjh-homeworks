const nextBtn = Array.from(document.getElementsByClassName('slider__arrow_next'))[0],
	previousBtn = Array.from(document.getElementsByClassName('slider__arrow_prev'))[0];

nextBtn.onclick = () => {
	const activeImg = document.querySelector('.slider__items  .slider__item_active');
	activeImg.classList.remove('slider__item_active');
	if (activeImg.nextElementSibling) {
		activeImg.nextElementSibling.classList.add('slider__item_active');
	} else {
		document.querySelector('.slider__items  .slider__item').classList.add('slider__item_active');
	}
}

previousBtn.onclick = () => {
	const activeImg = document.querySelector('.slider__items  .slider__item_active');
	activeImg.classList.remove('slider__item_active');
	if (activeImg.previousElementSibling) {
		activeImg.previousElementSibling.classList.add('slider__item_active');
	} else {
		Array.from(document.querySelectorAll('.slider__items  .slider__item'))
			.pop()
			.classList
			.add('slider__item_active');
	}
}
