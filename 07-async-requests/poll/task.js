const titleContainer = document.getElementById('poll__title');
const answersContainer = document.getElementById('poll__answers');
const buttons = [];
const request = new XMLHttpRequest();

function showAnswer(response) {
	titleContainer.innerHTML = response.data.title;
	response.data.answers.forEach((element) => {
		answersContainer.innerHTML += `<button class="poll__answer">${element}</button>`;
	});
}

function deleteListener() {
	buttons.forEach((element) => {
		element.removeEventListener('click', showMessageOnce);
	});
}

function showMessageOnce() {
	alert('Спасибо, Ваш голос защитан!');
	deleteListener();
}

request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.addEventListener('readystatechange', (event) => {
	if (event.target.readyState == 4 && event.target.status == 200) {
		const response = JSON.parse(event.target.responseText);
		showAnswer(response);
		Array.from(document.getElementsByClassName('poll__answer'))
			.forEach((element) => {
				buttons.push(element);
				element.addEventListener('click', showMessageOnce);
			});
	}
});
request.send();