const secHand = document.getElementById("sec-hand");
const minHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");


secRotate = 180;
secHand.style.transform = `rotate(${secRotate}deg)`;

minRotate = 220;
minHand.style.transform = `rotate(${minRotate}deg)`;

hourRotate = 55;
hourHand.style.transform = `rotate(${hourRotate}deg)`;
