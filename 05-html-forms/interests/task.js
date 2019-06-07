const interests = Array.from(document.getElementsByClassName('interest__check'));
console.log(interests);

interests.forEach(element => {
	element.addEventListener('change', event => {
		const innerInterest = Array.from(
			event.target
				.closest('.interest')
				.getElementsByClassName('interest__check')
		);
		if (event.target.checked) {
			innerInterest.forEach(element => {element.checked = true});
		} else {
			innerInterest.forEach(element => {element.checked = false});
		}
	});
});