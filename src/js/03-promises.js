import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  let delay = Number(e.currentTarget.delay.value);
  const step = Number(e.currentTarget.step.value);
  const amount = Number(e.currentTarget.amount.value);

  for (let position = 0; position < amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`,
            {
              useIcon: false,
            }
          );
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(`Reject promise ${position} in ${delay}ms`, {
            useIcon: false,
          });
        }, delay);
      });
    delay += step;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const objPromise = { position, delay };
  return new Promise((res, rej) => {
    if (shouldResolve) {
      res(objPromise);
    } else {
      rej(objPromise);
    }
  });
}
