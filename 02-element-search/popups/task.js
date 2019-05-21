function makeActive(windowId) {
	const myWindow = document.getElementById(windowId);
	myWindow.classList.add('modal_active');
}

makeActive('modal_main');

function closeModalActiveWindow() {
	const element = Array.from(document.getElementsByClassName('modal_active'));
	element[0].classList.remove('modal_active');
}

const closeElementsList = Array.from(document.querySelectorAll('.modal__close'));

closeElementsList.forEach(item => {
	item.onclick = closeModalActiveWindow;
});

const showSuccesBtns = Array.from(document.getElementsByClassName('show-success'));

showSuccesBtns.forEach((item) => {
	item.onclick = () => {
		closeModalActiveWindow();
		makeActive('modal_success');
	}
});