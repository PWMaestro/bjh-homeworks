class ToDoList {
	constructor( container ) {
		this.addButton = container.querySelector('#tasks__add');
		this.input = container.querySelector('#task__input');
		this.list = container.querySelector('#tasks__list');

		this.registerEvents();

		Storage.getFrom().forEach( item => {
			const task = this.wrapUp( item );
			this.show( task );
		});
	}

	registerEvents() {
		this.addButton.addEventListener('click', event => {
			event.preventDefault();
			const input = this.input.value.trim();
			!input || this.createTask( input );
		});
	}

	wrapUp( text ) {
		const element = document.createElement('div');
		element.classList.add('task');
		element.innerHTML = `
			<div class="task__title">
				${text}
			</div>
			<a href="#" class="task__remove">&times;</a>
		`;
		this.addEvent( element );

		return element;
	}

	createTask(text) {
		const element = this.wrapUp( text );
		
		Storage.add(text);

		this.show(element);
		this.input.value = '';
	}

	addEvent( item ) {
		item.querySelector('.task__remove')
			.addEventListener('click', event => {
				event.preventDefault();
				Storage.remove(
					item.querySelector('.task__title').textContent.trim()
				);
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
		if ( !localStorage.getItem('box') ) {
			localStorage.setItem( 'box', JSON.stringify([ ]) );
		}
	}

	add(item) {
		const box = JSON.parse( localStorage.getItem('box') );
		box.push(item);
		localStorage.setItem( 'box', JSON.stringify( box ) );
	}

	getFrom() {
		return JSON.parse( localStorage.getItem('box') );
	}

	remove( item ) {
		const box = JSON.parse( localStorage.getItem('box') );
		const index = box.indexOf( item );
		box.splice(index, 1);
		localStorage.setItem( 'box', JSON.stringify( box ) );
	}
}





const Storage = new LocalStorage();
new ToDoList( document.getElementById('tasks') );
