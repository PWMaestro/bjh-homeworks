class Tooltip {
	constructor(inNeed) {
		this.aim = inNeed;
		this.tooltip = document.createElement('div');
		this.tooltip.classList.add('tooltip');
		this.tooltip.innerText = inNeed.title;
		this.tooltip.dataset.position = 'right';

		this.create();
		this.registerEvents();
	}

	registerEvents() {
		this.aim.addEventListener('click', event => {
			event.preventDefault();
			this.relay();
		});
	}

	create() {
		this.aim.parentElement
			.insertBefore(this.tooltip, this.aim);
	}

	relay() {
		const isActive = this.tooltip.classList.contains('tooltip_active');

		Array.from(document.getElementsByClassName('tooltip_active'))
			.forEach(item => {
				item.classList.remove('tooltip_active')
			});

		if (!isActive) {
			this.tooltip.classList.add('tooltip_active');
			this.calcPosition();
		}
	}

	calcPosition() {
		const coordinates = this.aim.getBoundingClientRect();
		console.log(coordinates);

		switch(this.tooltip.dataset.position) {
			case 'top':
				this.tooltip.style.bottom = `${window.innerHeight - coordinates.top}px`;
				this.tooltip.style.left = `${coordinates.left}px`;
				break;
			case 'left':
				this.tooltip.style.top = `${coordinates.top}px`;
				this.tooltip.style.right = `${window.innerWidth - coordinates.left}px`;
				break;
			case 'right':
				this.tooltip.style.top = `${coordinates.top}px`;
				this.tooltip.style.left = `${coordinates.right}px`;
				break;
			case 'bottom':
				this.tooltip.style.top = `${coordinates.bottom}px`;
				this.tooltip.style.left = `${coordinates.left}px`;
				break;
		}
	}
}

Array.from(document.getElementsByClassName('has-tooltip'))
	.forEach( item => new Tooltip(item) );
