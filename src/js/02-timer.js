
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

require("flatpickr/dist/themes/dark.css");

import { Notify } from 'notiflix/build/notiflix-notify-aio';




const inputEl = document.getElementById("datetime-picker");
const btnStart = document.querySelector('[data-start]');
const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsleft = document.querySelector('[data-seconds]');

inputEl.disabled = false;
btnStart.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        if  (options.defaultDate.getTime() > selectedDates[0].getTime()) {
           Notify.warning('Please choose a date in the future')
        } else {
            btnStart.disabled = false;
          }
    },
};

btnStart.addEventListener('click',timer)     
const calendars = flatpickr('#datetime-picker', options);

function timer() {
    btnStart.disabled = true;
    inputEl.disabled = true;

  const timeId = setInterval(() => {
        const date = new Date();
        const dateResult = calendars.selectedDates[0].getTime() - date.getTime()
        if (dateResult < 1000) {
            clearInterval(timeId);
            inputEl.disabled = false;
        };
        
    convertMs(dateResult)
            daysLeft.textContent = addLeadingZero(inputTime.days, 2);
            hoursLeft.textContent = addLeadingZero(inputTime.hours,2);
            minutesLeft.textContent = addLeadingZero(inputTime.minutes,2);
        secondsleft.textContent = addLeadingZero(inputTime.seconds, 2);
}, 1000)
};

function addLeadingZero(value, targetLength){
   return String(value). padStart(targetLength, 0)
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

