function startCount() {
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

	function calculateClickSpeed() {
		const now = Date.now();
		const period = (now - lastClickDate) / 1000;
		const frequency = 1 / period;
		lastClickDate = now;

		return frequency.toFixed(2);
	}

	const visibleCounter = document.getElementById('clicker__counter');
	const visibleSpeed = document.getElementById('clicker__speed');
	let lastClickDate = Date.now();
	let clickCounter = 0;

	return () => {
		clickCounter++;
		visibleCounter.textContent = clickCounter;
		changeCookieSize(cookie.width);
		visibleSpeed.textContent = calculateClickSpeed();
	}
}

const cookie = document.getElementById('cookie');
cookie.onclick = startCount();