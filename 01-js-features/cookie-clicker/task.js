const cookie = document.getElementById('cookie');

function changeCookieSize(width) {
	switch(width) {
		case 200:
			cookie.width = 300;
			break;
		case 300:
			cookie.width = 200;
			break;
	}
}

function startCount() {
	const visibleCounter = document.getElementById('clicker__counter');
	let clickCounter = 0;

	return () => {
		clickCounter++;
		visibleCounter.textContent = clickCounter;
		changeCookieSize(cookie.width);
	}
}

cookie.onclick = startCount();