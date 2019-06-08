class ToDoList {
	constructor( container ) {
		this.addButton = container.querySelector('#tasks__add');
		this.input = container.querySelector('#task__input');
		this.list = container.querySelector('#tasks__list');

		this.registerEvents();
	}

	registerEvents() {
		this.addButton.addEventListener('click', event => {
			event.preventDefault();
			!this.input.value.trim() || this.create();
		});
	}

	create() {
		const element = document.createElement('div');
		element.classList.add('task');
		element.innerHTML = `
			<div class="task__title">
				${this.input.value.trim()}
			</div>
			<a href="#" class="task__remove">&times;</a>
		`;
		this.input.value = '';

		element.getElementsByClassName('task__remove')
			.item(0)
			.addEventListener('click', event => {
				event.preventDefault();
				event.target
					.closest('.task')
					.remove();
			});

		this.list.appendChild(element);
	}
}

new ToDoList( document.getElementById('tasks') );
