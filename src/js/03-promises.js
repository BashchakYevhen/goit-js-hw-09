import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener("submit", onFormSubmit )

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
       if (shouldResolve) {
      // Fulfill
      resolve ( { position: position, delay: delay });
    } else {
      // Reject
     reject ( { position: position, delay: delay });
    }
    },delay)
  });
 
};
function onFormSubmit(event) {
event.preventDefault();
const { elements: { delay, step, amount },
  } = event.target;
if(delay.value < 0 || step.value < 0 || amount.value < 0){
 return Notify.failure(`the value cannot be negative`)
  };
  let delayOfNumber = Number(delay.value);

  const stepOfNumber = Number(step.value);

for (let index = 1; index <= amount.value; index++) {
  createPromise(index, delayOfNumber)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delayOfNumber = delayOfNumber + stepOfNumber;
  };
   event.target.reset()
};
