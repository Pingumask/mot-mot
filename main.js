const toggler = document.getElementById('team-toggler');

toggler.addEventListener('click', toggleTeam);

document.addEventListener('keypress', handleKey);

const tokens = document.querySelectorAll('[data-letter]');

for (const token of tokens) {
	token.addEventListener('click', handleTouch);
}

function handleTouch(event) {
	moveToken(event.target);
}

function handleKey(event) {
	let key = event.key;
	if (key === 'Enter') {
		return toggleTeam();
	}
	const token = document.querySelector(`[data-letter="${key}"]`);
	if (token === null) {
		return; // not in game letter
	}
	moveToken(token);
}

function moveToken(token) {
	token.classList.toggle('flash');
	if (token.dataset.position == 3 || token.dataset.position == -3) {
		return; // letter already out
	}
	if (toggler.dataset.team === '⮟') {
		return moveDown(token);
	}
	moveUp(token);
}

function moveUp(token) {
	let newPos = Number(token.dataset.position) - 1;
	token.dataset.position = newPos;
	token.style.transform = `translateY(${newPos * 12}vmin)`;
}

function moveDown(token) {
	let newPos = Number(token.dataset.position) + 1;
	token.dataset.position = newPos;
	token.style.transform = `translateY(${newPos * 12}vmin)`;
}

function toggleTeam() {
	toggler.dataset.team = toggler.dataset.team === '⮟' ? '⮝' : '⮟';
}
