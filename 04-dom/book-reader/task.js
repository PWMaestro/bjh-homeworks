class Controls {
	constructor(book) {
		this.book = book;
		this.fontSizePanel = {
			value: book.querySelector('.book__control_font-size'),
			elements:
				Array.from(
					book.querySelector('.book__control_font-size')
						.getElementsByClassName('font-size'))
		}
		this.textColorPanel = {
			value: book.querySelector('.book__control_color'),
			elements:
				Array.from(
					book.querySelector('.book__control_color')
						.getElementsByClassName('color'))
		}

		this.registerEvents();
	}

	registerEvents() {
		this.fontSizePanel.elements.forEach((item, i) => { //addEventListener on font-size controller
			item.addEventListener('click', (event) => {
				event.preventDefault();
				this.fontSizePanel
					.value
					.querySelector('.font-size_active')
					.classList
					.remove('font-size_active');

				this.fontSizePanel
					.elements[i]
					.classList
					.add('font-size_active');
	
				this.setScaledFontSize(item);
			});

		});

		this.textColorPanel.elements.forEach((item, i) => { //addEventListener on text-color controller
			item.addEventListener('click', (event) => {
				event.preventDefault();
				this.textColorPanel
					.value
					.querySelector('.color_active')
					.classList
					.remove('color_active');

				this.textColorPanel
					.elements[i]
					.classList
					.add('color_active');
	
				this.setTextColor(item);
			});

		});
	}

	setScaledFontSize(element) {
		this.book.classList.forEach((item) => {
			if ( (item !== 'book') && item.includes('book_fs-') ) {
				this.book.classList.remove(item);
			}
		});

		if (element.classList.contains('font-size_small')) {
			this.book
				.classList
				.add(`book_fs-${element.dataset.size}`);
		} else if (element.classList.contains('font-size_big')) {
			this.book
				.classList
				.add(`book_fs-${element.dataset.size}`);
		}
	}

	setTextColor(element) {
		this.book.classList.forEach((item) => {
			if ( (item !== 'book') && item.includes('book_color-') ) {
				this.book.classList.remove(item);
			}
		});

		if (element.classList.contains('color_gray')) {
			this.book
				.classList
				.add(`book_color-${element.dataset.color}`);
		} else if (element.classList.contains('color_whitesmoke')) {
			this.book
				.classList
				.add(`book_color-${element.dataset.color}`);
		}
	}

/*
	registerEvents() {
		this.fontSizePanel.elements.forEach((item, i) => {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				this.fontSizePanel
					.value
					.querySelector('.font-size_active')
					.classList
					.remove('font-size_active');

				this.fontSizePanel
					.elements[i]
					.classList
					.add('font-size_active');
	
				this.setScaledFontSize(item);
			});

		});
	}

	setScaledFontSize(element) {
		this.book.classList.forEach((item) => {
			if (item !== 'book') {
				this.book.classList.remove(item);
			}
		});

		if (element.classList.contains('font-size_small')) {
			this.book.classList.add(`book_fs-${element.dataset.size}`);
		} else if (element.classList.contains('font-size_big')) {
			this.book.classList.add(`book_fs-${element.dataset.size}`);
		}
	}
	*/
}

new Controls(document.getElementById('book'));