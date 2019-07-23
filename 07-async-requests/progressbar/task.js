const progress = document.getElementById('progress');
const form = document.getElementById('form');
const btn = document.getElementById('send');

form.addEventListener('submit', () => {
	event.preventDefault();
});

btn.addEventListener('click', () => {
	const file = form.elements.file.files[0];
	if (file) {
		const xhr = new XMLHttpRequest();

		xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
		xhr.upload.addEventListener('progress', event => {
			progress.value = event.loaded / event.total;
		});
		xhr.send(file);
	}
});
