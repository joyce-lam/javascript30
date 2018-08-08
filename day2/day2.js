const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
	const now = new Date();
	
	const sec = now.getSeconds();
	const secDegrees = sec/60 *360;
	console.log(sec, secDegrees);
	secHand.style.transform = `rotate(${secDegrees}deg)`;

	const minute = now.getMinutes();
	const minuteDegrees = minute/60*360 + sec/60*6 + 90;
	console.log(minute, minuteDegrees);
	minHand.style.transform = `rotate(${minuteDegrees}deg)`;

	const hour = now.getHours();
	const hrDegrees = hour/12*360 + minute/60*30 + 90;
	console.log(hour, hrDegrees);
	hourHand.style.transform = `rotate(${hrDegrees}deg)`;
}

setInterval(setTime, 1000);