const daysEle = document.querySelector("#days");
const hoursEle = document.querySelector("#hours");
const minEle = document.querySelector("#min");
const secEle = document.querySelector("#sec");

function getTimeDifference(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}
const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
function initializeTimer(endtime) {
  function updateTime() {
    const t = getTimeDifference(endtime);

    daysEle.innerHTML = ("0" + t.days).slice(-2);
    hoursEle.innerHTML = ("0" + t.hours).slice(-2);
    minEle.innerHTML = ("0" + t.minutes).slice(-2);
    secEle.innerHTML = ("0" + t.seconds).slice(-2);
    if (t.total <= 0) clearInterval(timer);
  }
  updateTime();
  const timer = setInterval(updateTime, 1000);
}
initializeTimer(deadline);
