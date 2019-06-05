const chatWidget = document.querySelector('.chat-widget'),
	chat = document.getElementById('chat-widget__messages'),
	chatWindow = document.querySelector('.chat-widget__messages-container'),
	roboMessages = [
		'Злого тебе дня!',
		'Я бы поучавствовал с тобою в интеллектуальной дуэли, но боюсь, у тебя нет оружия...',
		'Всего нехорошего!',
		'А ты вообще человек?',
		'До свидания!',
		'...',
		'Многоунижаемый покупатель! Не заходите к нам больше!',
		'Где ваша совесть?',
		'А лицо вареньем не намазать?',
		'Кто же там кукарекает, а?',
		'Уходи!'
	];
let timerId = 0;

document.querySelector('.chat-widget__side')
	.addEventListener('click', () => {
		chatWidget.classList.add('chat-widget_active');
		timerId = setTimeout(answer, 30000);
	});

document.addEventListener('keypress', event => {
	if (event.code === 'Enter') {
		let input = document.getElementById('chat-widget__input');
		if (input) {
			clearTimeout(timerId);
			chat.innerHTML += `
				<div class="message message_client">
                    <div class="message__time">${String(new Date()).substring(16, 21)}</div>
                    <div class="message__text">${input.value.trim()}</div>
                </div>
			`;
			input.value = '';
			setTimeout(answer(), 1000);
			chatWindow.scrollTop = chatWindow.scrollHeight;
		}
	}
});

function answer() {
	const phraseIndex = Math.round(Math.random() * (roboMessages.length - 1));
	chat.innerHTML += `
		<div class="message">
            <div class="message__time">${String(new Date()).substring(16, 21)}</div>
            <div class="message__text">${roboMessages[phraseIndex]}</div>
        </div>
	`;
	chatWindow.scrollTop = chatWindow.scrollHeight;
	timerId = setTimeout(answer, 30000);
}