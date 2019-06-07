const interests = Array.from(document.getElementsByClassName('interest__check'));

interests.forEach(element => {
	element.addEventListener('change', event => {
		checkCurrent(event.target);
		checkParent(event.target);
	});
});

function checkCurrent(element) {
	const innerInterest = Array.from(
		element.closest('.interest')
			.getElementsByClassName('interest__check')
	);
	if (element.checked) {
		innerInterest.forEach(element => {element.checked = true});
	} else {
		innerInterest.forEach(element => {element.checked = false});
	}
}

function checkParent(element) {
	const parent = element.closest('ul'),
		grandPa = parent.closest('li');

	if (grandPa) {
		const checked = Array.from(parent.querySelectorAll('.interest__check:checked')),
			all = Array.from(parent.getElementsByClassName('interest__check')),
			aboveEl = grandPa.querySelector('input.interest__check');

		if (checked.length === 0) {
			aboveEl.indeterminate = false;
			aboveEl.checked = false;
		} else if (checked.length === all.length) {
			aboveEl.indeterminate = false;
			aboveEl.checked = true;
		} else {
			aboveEl.indeterminate = true;
		}
		checkParent(aboveEl);
	}
}