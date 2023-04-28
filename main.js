const toggler = document.getElementById('team-toggler');

toggler.addEventListener('click', toggleTeam);

document.addEventListener('keypress', handleKey);

function handleKey(event) {
	let key = event.key;
	if (key === ' ') {
		return toggleTeam();
	}
	const token = document.querySelector(`[data-letter="${key}"]`);
	if (token === null) {
		return console.log(`Missing letter : ${key}`);
	}
	token.classList.toggle('flash');
	if (token.dataset.height == 3 || token.dataset.height == -3) {
		return console.log(`Token ${key} already out`);
	}
	if (toggler.dataset.team === '⮟') {
		return moveDown(token);
	}
	moveUp(token);
}

function moveUp(token) {
	let newHeight = Number(token.dataset.height) - 1;
	token.dataset.height = newHeight;
	token.style.transform = `translateY(${newHeight * 7}rem)`;
}

function moveDown(token) {
	let newHeight = Number(token.dataset.height) + 1;
	token.dataset.height = newHeight;
	token.style.transform = `translateY(${newHeight * 7}rem)`;
}

function toggleTeam() {
	toggler.dataset.team = toggler.dataset.team === '⮟' ? '⮝' : '⮟';
}
