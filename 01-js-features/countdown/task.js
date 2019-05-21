function setDateCounter({hoursIncrement, minutesIncrement, secondsIncrement}) {
	const future = new Date();
	future.setHours(future.getHours() + hoursIncrement);
	future.setMinutes(future.getMinutes() + minutesIncrement);
	future.setSeconds(future.getSeconds() + secondsIncrement);
	return () => future - Date.now();
}

function convertMs(ms) {
	const msInHour = 1000 * 60 * 60;
	const msInMinute = 1000 * 60;
	const msInSecond = 1000;

	const hours = parseInt(ms / msInHour, 10);
	ms -= hours * msInHour;

	const minutes = parseInt(ms / msInMinute, 10);
	ms -= minutes * msInMinute;

	const seconds = parseInt(ms / msInSecond, 10);

	return {
		hours,
		minutes,
		seconds
	};
}

function checkCounter(time, id) {
	if (time.seconds == 0 && time.minutes == 0 && time.hours == 0) {
		clearTimeout(id);
		alert('Вы победили в конкурсе!');
		location.assign('http://torrent-tracker.co/engine/download.php?id=19902');
	}
}

function displayLeftTime(timeObj) {
	for (let value in timeObj) {
		if (timeObj[value] < 10) {
			timeObj[value] = '0' + timeObj[value];	
		}
	}
	output.textContent = `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`;
}

const getDateDifference = setDateCounter({
	hoursIncrement: 0,
	minutesIncrement: 0,
	secondsIncrement: 9
});
const output = document.getElementById('timer');

const timerId = setInterval(() => {
	const time = convertMs(getDateDifference());
	displayLeftTime(time);
	checkCounter(time, timerId);
}, 1000);
