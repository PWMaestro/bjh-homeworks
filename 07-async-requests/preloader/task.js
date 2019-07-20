class LocalStorage {
	constructor(containerName) {
		this.name = containerName;
		if (!localStorage.getItem(`${this.name}`)) {
			localStorage.setItem(`${this.name}`, JSON.stringify([]));
		}
	}

	addItems(items) {
		const box = JSON.parse(localStorage.getItem(`${this.name}`));
		for (let key in items) {
			box.push(items[key]);
		}
		localStorage.setItem(`${this.name}`, JSON.stringify(box));
	}

	getItems() {
		return JSON.parse(localStorage.getItem(`${this.name}`));
	}

	removeItems() {
		localStorage.setItem(`${this.name}`, JSON.stringify([]));
	}
}

class List {
	constructor(container, loadImg) {
		this.img = loadImg;
		this.wrap = container;
		this.items = [];
	}

	addItems(itemsArray) {
		for (let key in itemsArray) {
			this.items.push({
				code: itemsArray[key].CharCode,
				value: itemsArray[key].Value,
				targetCurrency: 'руб.'
			});
		}
	}

	show(items) {
		for (let key in items) {
			this.wrap.innerHTML += `
				<div class="item">
					<div class="item__code">${items[key].code}</div>
					<div class="item__value">${items[key].value}</div>
					<div class="item__currency">${items[key].targetCurrency}</div>
				</div>
			`;
		}
		this.hideImg();
	}

	clear() {
		this.wrap.innerHTML = '';
		this.showImg();
	}

	hideImg() {
		this.img.classList.remove('loader_active');
	}

	showImg() {
		this.img.classList.add('loader_active');
	}
}

const request = new XMLHttpRequest();
const Storage = new LocalStorage('itemsContainer');
const CurrencyList = new List(
	document.getElementById('items'),
	document.getElementById('loader')
);





if (Storage.getItems().length) {
	CurrencyList.show(Storage.getItems());
}
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.addEventListener('readystatechange', (event) => {
	if (event.target.readyState == 4 && event.target.status == 200) {
		const data = JSON.parse(event.target.responseText);

		CurrencyList.addItems(data.response.Valute);
		Storage.removeItems();
		Storage.addItems(CurrencyList.items);
		CurrencyList.clear();
		CurrencyList.show(CurrencyList.items);
	}
});
request.send();