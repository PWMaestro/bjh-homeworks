const titleContainer = document.getElementById('poll__title');
const answersContainer = document.getElementById('poll__answers');
const getRequest = new XMLHttpRequest();
let response = {};

function deleteListeners() {
	Array.from(document.getElementsByClassName('poll__answer'))
		.forEach(element => {
			element.removeEventListener('click', showMessageOnce);
			element.removeEventListener('click', sendPostRequest);
		});
}

function showMessageOnce() {
	alert('Спасибо, Ваш голос защитан!');
	deleteListeners();
}

function sendPostRequest() {
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.addEventListener('readystatechange', event => {
		if (event.target.readyState == 4 && event.target.status == 200) {
			const answer = JSON.parse(event.target.responseText);
			let allVotes = 0;
			answersContainer.innerHTML = '';

			answer.stat.forEach(element => {
				allVotes += element.votes;
			});

			answer.stat.forEach(element => {
				const percents = (element.votes / allVotes) * 100;
				answersContainer.innerHTML += `
					<p>${element.answer}: ${percents.toFixed(2)}%</p>
				`;
			});
		}
	});
	xhr.send(`vote=${response.id}&answer=${event.target.textContent}`);
}





getRequest.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
getRequest.addEventListener('readystatechange', event => {
	if (event.target.readyState == 4 && event.target.status == 200) {
		response = JSON.parse(event.target.responseText);

		titleContainer.innerText = response.data.title;
		response.data.answers.forEach((element, index) => {
			answersContainer.innerHTML += `<button class="poll__answer">${element}</button>`;
		});

		Array.from(document.getElementsByClassName('poll__answer'))
			.forEach(element => {
				element.addEventListener('click', sendPostRequest);
				element.addEventListener('click', showMessageOnce);
			});
		
		
	}
});
getRequest.send();