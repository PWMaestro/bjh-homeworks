class ControlPanel {
	/*data = {
		mainElem: [HTML element] main container of panel,
		elements = {
			mainClass: [String] main class of elements which are inside of panel,
			activeClass: [String] active class of elements which are inside of panel,
			specialClasses: [Array] special classes of each inner element
			dataAtr: [String]
		}
		bookPrefix: special class prefix to add in book HTML element
	}*/
	constructor(data) {
		this.panel = data.mainElem;
		this.elements = {
			value: Array.from(
				this.panel.getElementsByClassName(data.elements.mainClass)
			),
			activeClass: data.elements.activeClass,
			specialClasses: data.elements.specialClasses,
			dataAtr: data.elements.dataAtr
		}
		this.bookPrefix = data.bookPrefix;
	}

	registerEvents() {
		this.elements.value.forEach((item, i) => {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				this.panel
					.querySelector(`.${this.elements.activeClass}`)
					.classList
					.remove(this.elements.activeClass);

				this.elements
					.value[i]
					.classList
					.add(this.elements.activeClass);
	
				this.panel
					.closest('.book')
					.classList
					.forEach((item) => {
						if ( (item !== 'book') && item.includes(this.bookPrefix) ) {
							this.panel
								.closest('.book')
								.classList
								.remove(item);
						}
					});
					
				if (item.classList.contains(this.elements.specialClasses[0]) ||
					item.classList.contains(this.elements.specialClasses[1]) ) {
						this.panel
							.closest('.book')
							.classList
							.add( `${this.bookPrefix +
								item.dataset[this.elements.dataAtr]}` );
				} 	
			});

		});
	}
}

const textPanel = new ControlPanel({
	mainElem: document.querySelector('.book__control_font-size'),
	elements: {
		mainClass: 'font-size',
		activeClass: 'font-size_active',
		specialClasses: [
			'font-size_small',
			'font-size_big'
		],
		dataAtr: 'size'
	},
	bookPrefix: 'book_fs-'
});

const textColorPanel = new ControlPanel({
	mainElem: document.querySelector('.book__control_color'),
	elements: {
		mainClass: 'color',
		activeClass: 'color_active',
		specialClasses: [
			'color_gray',
			'color_whitesmoke'
		],
		dataAtr: 'color'
	},
	bookPrefix: 'book_color-'
});

const backgroundColorPanel = new ControlPanel({
	mainElem: document.querySelector('.book__control_background'),
	elements: {
		mainClass: 'color',
		activeClass: 'color_active',
		specialClasses: [
			'color_gray',
			'color_black'
		],
		dataAtr: 'color'
	},
	bookPrefix: 'book_bg-'
});

textPanel.registerEvents();
textColorPanel.registerEvents();
backgroundColorPanel.registerEvents();
