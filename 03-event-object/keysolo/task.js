class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');
    this.timer = { end: 0, id: 0 };

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.setTimer();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timerElement.textContent = 0;
  }

  setTimer() {
  	const timeLeft = Array.from(document.getElementsByClassName('symbol')).length;
  	this.timerElement.textContent = timeLeft;
  	this.timer.end = Date.now() + timeLeft * 1000;
  	this.timer.id = setInterval(() => {
  		const leftSec = Math.round((this.timer.end - Date.now()) / 1000);
  		if (leftSec <= 0) {
  			clearInterval(this.timer.id);
  			this.fail();
  		}
  		this.timerElement.textContent = Math.round((this.timer.end - Date.now()) / 1000);
  	}, 1000);
  }

  registerEvents() {
  	window.addEventListener('load', () => {
  		this.setTimer();
  	});
  	document.addEventListener('keypress', event => {
  		(event.key.toLowerCase() !== this.currentSymbol.textContent.toLowerCase())
  		? this.fail()
  		: this.success();
  	});
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    this.setTimer();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
    this.setTimer();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

