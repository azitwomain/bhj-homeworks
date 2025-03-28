'use strict';
let element = document.getElementById('timer');

let startTimer = 30;

let hours = 0;
let minutes = 1;
let seconds = 15;

function changeTimer() {
	if (startTimer == 0) {
		clearInterval(interval);
		alert('Вы победили в конкурсе!');
	}
	element.textContent = startTimer;
	startTimer --;
}

function changeHMSTimer () {
	if (seconds == 0) {

		if (minutes == 0) {

			if(hours == 0) {
				clearInterval(interval);
				alert('Вы победили в конкурсе!');
				document.location.assign('https://www.garant.ru/files/4/7/609374/dogovor_autsorsing.doc');

				return;
			}

			minutes = 59;
		}

		minutes--;
		seconds = 59;
	}

	seconds--;
	element.textContent = `
	${hours < 10 ? '0' + hours : hours} :
	${minutes < 10 ? '0' + minutes : minutes} :
	${seconds < 10 ? '0' + seconds : seconds}`;
}

let interval
//interval= setInterval(changeTimer, 100);
interval = setInterval(changeHMSTimer, 100);