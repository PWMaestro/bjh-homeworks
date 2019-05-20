const changeValue = function () {
	const output = document.getElementById('timer');
	output.textContent--;
	if (output.textContent == 0) {
		alert('Вы победили в конкурсе!');
		clearTimeout(timerId);
	}
}

let timerId = setInterval(changeValue, 1000);
