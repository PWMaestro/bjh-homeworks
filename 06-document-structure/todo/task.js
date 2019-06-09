class ToDoList {
	constructor( container ) {
		this.addButton = container.querySelector('#tasks__add');
		this.input = container.querySelector('#task__input');
		this.list = container.querySelector('#tasks__list');

		this.registerEvents();

		Storage.getFrom().forEach( item => {
			const task = this.wrapUp(item);
			this.show(task);
		});
	}

	registerEvents() {
		this.addButton.addEventListener('click', event => {
			event.preventDefault();
			const input = this.input.value.trim();
			!input || this.createTask( input );
		});
	}

	wrapUp( {text, index} ) {
		const element = document.createElement('div');
		element.classList.add('task');
		element.dataset.index = index;
		element.innerHTML = `
			<div class="task__title">
				${text}
			</div>
			<a href="#" class="task__remove">&times;</a>
		`;
		this.addEvent(
			{
				item: element.querySelector('.task__remove'),
				index
			}
		);

		return element;
	}

	createTask(text) {
		const index = Storage.getCurrentIndex();
		const element = this.wrapUp( {text, index} );
		
		Storage.add(text);

		this.show(element);
		this.input.value = '';
	}

	addEvent( {item, index} ) {
		item.addEventListener('click', event => {
			event.preventDefault();
			Storage.remove(index);
			this.remove( event.target.closest('.task') );
		});		
	}

	show(item) {
		this.list.appendChild(item);
	}

	remove(item) {
		item.remove();
	}
}





class LocalStorage {
	constructor() {
		if ( !localStorage.getItem('counter') ) {
			localStorage.setItem( 'counter', JSON.stringify({ index: 0 }) );
			localStorage.setItem( 'box', JSON.stringify({ }) );
		}
	}

	add(item) {
		const box = JSON.parse( localStorage.getItem('box') );

		box[this.getCurrentIndex()] = item;
		localStorage.setItem( 'box', JSON.stringify(box) );
		this.nextIndex();
	}

	getFrom() {
		const box = JSON.parse( localStorage.getItem('box') ),
			output = [];

		for (let key in box) {
			const obj = {
				text: box[key],
				index: key
			}
			output.push(obj);
		}

		return output;
	}

	getCurrentIndex() {
		return JSON.parse( localStorage.getItem('counter') ).index;
	}

	nextIndex() {
		const newIndex = JSON.parse( localStorage.getItem('counter') );
		newIndex.index++;
		localStorage.setItem( 'counter', JSON.stringify(newIndex) );
	}

	remove(index) {
		const box = JSON.parse( localStorage.getItem('box') );
		for (let key in box) {
			// console.log(key);
			// console.log(index);
			if (key === index) {
				delete box[key];
			}
		}
		localStorage.setItem( 'box', JSON.stringify(box) );
	}
}





const Storage = new LocalStorage();
new ToDoList( document.getElementById('tasks') );
