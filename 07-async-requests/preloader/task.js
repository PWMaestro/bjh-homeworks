const request = new XMLHttpRequest();
const loadImg = document.getElementById('loader');
let container = document.getElementById('items');

request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.addEventListener('readystatechange', (event) => {
	if (event.target.readyState == 4 && event.target.status == 200) {
		const data = JSON.parse(event.target.responseText);
		for (let key in data.response.Valute) {
			container.innerHTML += `
				<div class="item">
					<div class="item__code">${data.response.Valute[key].CharCode}</div>
					<div class="item__value">${data.response.Valute[key].Value}</div>
					<div class="item__currency">руб.</div>
				</div>
			`;
		}
		loadImg.classList.remove('loader_active');
	}
});
request.send();