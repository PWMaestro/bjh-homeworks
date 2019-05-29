function rotate(roll) {
	const adList = Array.from(roll.getElementsByClassName('rotator__case'));
	let activeAdIndex = adList.indexOf(roll.querySelector('.rotator__case_active'));
	let rotatorId = 0;

	function next() {
		adList[activeAdIndex].classList.remove('rotator__case_active');
		if (++activeAdIndex === adList.length) {
			activeAdIndex = 0;
		}
		adList[activeAdIndex].classList.add('rotator__case_active');
		adList[activeAdIndex].style.color = adList[activeAdIndex].dataset.color;
		rotatorId = setTimeout(next, adList[activeAdIndex].dataset.speed);
	}

	return () => {
		if (rotatorId === 0) {
			next();
			return rotatorId;
		} else {
			return rotatorId;
		}
	}
}

const rotatorId = rotate(document.querySelector('.rotator'));
rotatorId();// returns Id to clear current timeout
