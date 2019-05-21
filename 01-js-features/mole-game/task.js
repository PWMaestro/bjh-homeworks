const getHole = index => document.getElementById(`hole${index}`),
	elements = [];

function checkHoleWhenClick(elem) {
	function resetStatistics() {
		hit.textContent = 0;
		miss.textContent = 0;
		unlockedHole = true;
	}

	let hit = document.getElementById('dead'),
		miss = document.getElementById('lost'),
		unlockedHole = true;

	return () => {
		if (unlockedHole) {
			if (elem.classList.contains('hole_has-mole')) {
				hit.textContent++;
				unlockedHole = false;
				setTimeout(() => unlockedHole = true, 800);
				if (hit.textContent == 10) {
					alert('You win!');
					resetStatistics();
				}
			} else {
				miss.textContent++;
				if (miss.textContent == 5) {
					alert('You lose!');
					resetStatistics();
				}
			}
			
		}
	}
}

for (let i = 0; i < 9; i++) {
	elements.push(getHole(i + 1));
	elements[i].onclick = checkHoleWhenClick(elements[i]);
}
