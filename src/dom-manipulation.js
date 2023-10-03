import { fetchLocation } from './interact-with-api';
import { format } from 'date-fns';
export { inputController };

const button = document.querySelector('.input-button');
const input = document.querySelector('.location-input');
const form = document.querySelector('.form');
const errorSpan = document.querySelector('.error-message');
const locationName = document.querySelector('.current-location');
const weatherInfoBlocks = document.querySelectorAll('.weather-cell');

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

function displayInfo(weatherInfo) {
  const data = weatherInfo;
  displayCityAndCountryName(data);
  displayDates(data);
}

function displayCityAndCountryName(object) {
  const city = object.location.name;
  const country = object.location.country;

  locationName.textContent = `${city}, ${country}`;
}

function displayDates(object) {
  const dateArray = formatDates(object.forecast.forecastday);

  let count = 0;
  weatherInfoBlocks.forEach((block) => {
    block.children[0].textContent = dateArray[count];
    count++;
  });
}

function formatDates(originalArray) {
  let formattedArray = [];
  originalArray.forEach((element) => {
    const dateSeparateDigits = element.date.split('-');
    const year = dateSeparateDigits[0];
    const month = dateSeparateDigits[1];
    const day = dateSeparateDigits[2];

    const dateObject = new Date(year, month - 1, day);
    const formattedDate = format(dateObject, 'MMMM d, y');
    formattedArray.push(formattedDate);
  });
  return formattedArray;
}
