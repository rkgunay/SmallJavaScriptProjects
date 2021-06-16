const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins') 
const secondsEl = document.getElementById('seconds')


const countDownDate = new Date("Jul 22, 2021 10:00:00").getTime();
const dotDot = "";
function countdown(){

  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))+dotDot;
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+dotDot;
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))+dotDot;
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
  return (time < 10) ? "0"+time : time;
}

countdown();

setInterval(countdown, 1000);