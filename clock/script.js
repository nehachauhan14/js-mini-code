const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');

function setDate() {
    let now = new Date();

    let seconds = now.getSeconds();
    let secondDgr = seconds * 6;
    secondHand.style.transform = `rotate(${secondDgr}deg)`;

    let mins = now.getMinutes();
    let minutesDgr = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minutesDgr}deg)`;

    let hour = now.getHours();
    let hoursDgr = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDgr}deg)`;
}
setInterval(setDate, 1000);
setDate();