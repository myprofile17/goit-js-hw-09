import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = Number(value);
  });
  let delay = data.delay;
  for (let i = 0; i < data.amount; i += 1) {
    showPromise(createPromise(i + 1, delay));
    delay += data.step;
  }
});

function showPromise(promise) {
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
        useIcon: false,
      });
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Reject promise ${position} in ${delay}ms`, {
        useIcon: false,
      });
    });
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
