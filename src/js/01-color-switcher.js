

const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
const bodyEl = document.querySelector("body")

btnStart.addEventListener("click", onBodyColorStart)
btnStop.addEventListener("click", onBodyColorStop)
btnStop.disabled = true;




function onBodyColorStart(e) {
    btnStart.disabled = true;
    btnStop.disabled = false;
    timerId = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
};

function onBodyColorStop(e) {
    btnStart.disabled = false;
    btnStop.disabled = true;
clearInterval(timerId);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
