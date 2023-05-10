import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const btn = document.querySelector('button');
const form = document.querySelector('.feedback-form');
const dataFromLocalStorage = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

if (localStorage.getItem('feedback-form-state')) {
  input.value = dataFromLocalStorage.email;
  textarea.value = dataFromLocalStorage.message;
}

form.addEventListener('input', throttle(saveData, 500));
btn.addEventListener('click', clearData);

function clearData(e) {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  input.value = '';
  textarea.value = '';
}

function saveData(e) {
  const userData = {
    email: input.value,
    message: textarea.value,
  };
  if (e.target.name === 'email') {
    userData.email = e.target.value;
  }
  if (e.target.name === 'message') {
    userData.message = e.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}
