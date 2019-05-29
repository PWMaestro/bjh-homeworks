class Controls {
	constructor(book) {
		this.book = book;
		this.fontSizePanel = {
			value: book.querySelector('.book__control_font-size'),
			elements: Array.from(book.getElementsByClassName('font-size'))
		}

		this.registerEvents();
	}

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
}

new Controls(document.getElementById('book'));