function moveTo(position) {
	return () => {
		document.querySelector('.slider__dot_active')
			.classList
			.remove('slider__dot_active');
		dots[position].classList.add('slider__dot_active');

		document.querySelector('.slider__item_active')
			.classList
			.remove('slider__item_active');
		Array.from(document.querySelectorAll('.slider__item'))[position]
			.classList
			.add('slider__item_active');
	}
}

const dots = Array.from(document.querySelectorAll('.slider__dot'));

dots.forEach((item, i) => item.onclick = moveTo(i));

const rightBtn = document.querySelector('.slider__arrow_next'),
	leftBtn = document.querySelector('.slider__arrow_prev');

rightBtn.onclick = () => {
	let index = dots.indexOf(document.querySelector('.slider__dot_active'));
	++index === dots.length ? dots[0].onclick() : dots[index].onclick();
}

leftBtn.onclick = () => {
	let index = dots.indexOf(document.querySelector('.slider__dot_active'));
	index === 0 ? dots[dots.length - 1].onclick() : dots[--index].onclick();
}