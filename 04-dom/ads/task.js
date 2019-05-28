function rotate(roll) {
	const adList = Array.from(roll.getElementsByClassName('rotator__case'));
	let activeAdIndex = adList.indexOf(roll.querySelector('.rotator__case_active'));

	return setInterval(() => {
		adList[activeAdIndex].classList.remove('rotator__case_active');
		if (++activeAdIndex === adList.length) {
			activeAdIndex = 0;
		}
		adList[activeAdIndex].classList.add('rotator__case_active');
	}, 1000);
}

const rotatorId = rotate(document.querySelector('.rotator'));