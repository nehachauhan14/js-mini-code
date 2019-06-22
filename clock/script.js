const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const clock = document.querySelector('.clock');
const digitalClock = document.querySelector('.dig-clock');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const footerText = footer.querySelector('span');

function setDate() {
    let now = new Date();

    let seconds = now.getSeconds();
    let secondDgr = seconds * 6;
    secondHand.style.transform = `rotate(${secondDgr}deg)`;

    let mins = now.getMinutes();
    let minutesDgr = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDgr}deg)`;

    let hour = now.getHours();
    let hoursDgr = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDgr}deg)`;
}
setInterval(setDate, 1000);
setDate();

function date_time(id) {
    date = new Date;
    h = date.getHours() % 12;
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("s").innerHTML = '' + s;
    document.getElementById("m").innerHTML = '' + m;
    document.getElementById("h").innerHTML = '' + h;
    setTimeout('date_time("' + "s" + '");', '1000');
    return true;
}
window.onload = date_time('s');

function toggleClass() {
    var checkbox = document.querySelector('.toggle');

    if (checkbox.checked == true) {
        clock.style.display = "none";
        digitalClock.style.display = "block";
        body.style.background = "#333";
        footer.style.background = "whitesmoke";
        footerText.style.color = "black";
        footerText.getElementsByTagName("A")[0].style.color = "black";
    } else {
        clock.style.display = "block";
        digitalClock.style.display = "none";
        body.style.removeProperty("background");
        footer.style.removeProperty("background");
        footer.style.removeProperty("color");
        footerText.style.removeProperty("color");
        footerText.getElementsByTagName("A")[0].style.removeProperty("color");
    }
}