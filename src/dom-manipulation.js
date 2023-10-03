import { fetchLocation } from './interact-with-api';
export { inputController };

const button = document.querySelector('.input-button');
const input = document.querySelector('.location-input');
const form = document.querySelector('.form');
const errorSpan = document.querySelector('.error-message');

function inputController() {
  console.log('Initialize click and keyboard events.');
  button.addEventListener('click', getValueFromInput);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      getValueFromInput();
    }
  });
}

function getValueFromInput() {
  fetchLocation(input.value, displayInfo, errorSpan);
  clearInput();
}

function clearInput() {
  form.reset();
}

