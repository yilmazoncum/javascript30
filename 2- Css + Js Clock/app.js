const secHand = document.getElementById("sec-hand");
const minHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

function setDate() {
    const now = new Date ;
  
    secRotate = ((now.getSeconds())*6); //6 degree comes from 360deg/60second
    secHand.style.transform = `rotate(${secRotate}deg)`;

    minRotate = ((now.getMinutes())*6);//6 degree comes from 360deg/60minutes
    minHand.style.transform = `rotate(${minRotate}deg)`;

    hourRotate =((now.getHours())*30); // 30degree comes from 360deg/12hours
    hourHand.style.transform = `rotate(${hourRotate}deg)`;

}

setInterval(setDate, 1000);
     