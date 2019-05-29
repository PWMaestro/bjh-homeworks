class Rotator {
	constructor(roll) {
		this.elemList = Array.from(roll.getElementsByClassName('rotator__case'));
		this.index = this.elemList.indexOf(roll.querySelector('.rotator__case_active'));
		this.id = 0;

		this.next();
	}

	next() {
		this.elemList[this.index].classList.remove('rotator__case_active');

		if (++this.index === this.elemList.length) {
			this.index = 0;
		}
		
		this.elemList[this.index]
			.classList
			.add('rotator__case_active');

		const color = this.elemList[this.index]
			.dataset
			.color;

		this.elemList[this.index].style.color = color;

		this.id = setTimeout(() => {
			this.next();
		},
		this.elemList[this.index].dataset.speed);
	}
}

new Rotator(document.querySelector('.rotator'));