import { fetchLocation } from './interact-with-api';
import { format, getYear } from 'date-fns';
import weatherConditionData from './weather-conditions.json';
import {
  checkLocalStorage,
  populateLocalStorage,
} from './local-storage-module';
export { inputController, keepYearInFooterUpdated };

const button = document.querySelector('.input-button');
const input = document.querySelector('.location-input');
const form = document.querySelector('.form');
const errorSpan = document.querySelector('.error-message');
const locationName = document.querySelector('.current-location');
const weatherInfoBlocks = document.querySelectorAll('.weather-cell');
const temperatureType = document.querySelector('#temperature-style');
const loader = document.querySelector('.loader');
const moduleElement = document.querySelector('.module');
const footer = document.querySelector('.footer-year');

// Keep all event listeners in one place that are added on a page load
function inputController() {
  button.addEventListener('click', getValueFromInput);
  input.addEventListener('keydown', submitLocationOnEnter);
  temperatureType.addEventListener('change', toggleTemperatureStyle);

  // Check local storage and define initial page view
  const initialState = checkLocalStorage();
  if (!initialState) {
    fetchLocation('Prague', displayInfo, errorSpan, toggleLoader);
  } else {
    const location = initialState.location.name;
    fetchLocation(location, displayInfo, errorSpan, toggleLoader);
  }
}

// Globally store a current location to get its value in a couple different functions
let currentShownLocation;

function toggleTemperatureStyle() {
  displayTemperature();
}

function submitLocationOnEnter(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    getValueFromInput();
  }
}

function getValueFromInput() {
  // Imported function to fetch and retrieve data
  fetchLocation(input.value, displayInfo, errorSpan, toggleLoader);
  clearInput();
}

function clearInput() {
  form.reset();
}

// Show a loading component
function toggleLoader() {
  useModuleElement();
  if (loader.classList[1] === 'hidden') {
    loader.classList.remove('hidden');
    loader.classList.add('visible');
  } else {
    loader.classList.remove('visible');
    loader.classList.add('hidden');
  }
}

function useModuleElement() {
  if (moduleElement.classList[1] === 'passive') {
    moduleElement.classList.remove('passive');
    moduleElement.classList.add('active');
  } else {
    moduleElement.classList.remove('active');
    moduleElement.classList.add('passive');
  }
}

// Callback function that receives a processed weather object from a different module
function displayInfo(weatherInfo) {
  currentShownLocation = weatherInfo;
  // Update local storage 
  populateLocalStorage(currentShownLocation);
  displayCityAndCountryName();
  displayDates();
  displayTemperature();
  displayWeatherCondition();
  displayExtraWeatherInfo();
}

function displayCityAndCountryName() {
  const city = currentShownLocation.location.name;
  const country = currentShownLocation.location.country;
  locationName.textContent = `${city}, ${country}`;
}

function displayDates() {
  const dateArray = formatDates();
  let count = 0;
  weatherInfoBlocks.forEach((block) => {
    block.children[0].textContent = dateArray[count];
    count++;
  });
}

// Use fns-library to format dates
function formatDates() {
  const nonFormattedArray = currentShownLocation.forecast.forecastday;
  let formattedArray = [];
  nonFormattedArray.forEach((element) => {
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

function displayTemperature() {
  let count = 0;
  weatherInfoBlocks.forEach((block) => {
    const typeOfTemperature = checkSelectedTypeOfTemperature();
    const infoAboutDay = currentShownLocation.forecast.forecastday[count].day;

    let min;
    let max;
    let symbol;
    if (typeOfTemperature === 'Celsius') {
      min = infoAboutDay.mintemp_c;
      max = infoAboutDay.maxtemp_c;
      // Get a celsius symbol
      symbol = convertUnicodeCharToSymbol(0x2103);
    } else if (typeOfTemperature === 'Fahrenheit') {
      min = infoAboutDay.mintemp_f;
      max = infoAboutDay.maxtemp_f;
      // Get a fahrenheit symbol
      symbol = convertUnicodeCharToSymbol(0x2109);
    }
    min = roundTemperature(min);
    max = roundTemperature(max);

    block.children[2].textContent = `${min} - ${max} ${symbol}`;
    count++;
  });
}

function convertUnicodeCharToSymbol(seq) {
  const symbol = String.fromCharCode(seq);
  return symbol;
}

function roundTemperature(temp) {
  const roundedValue = Math.round(temp);
  return roundedValue;
}

function checkSelectedTypeOfTemperature() {
  const currentValue = temperatureType.value;
  return currentValue;
}

// Dynamically importing all images from weather-icons/ directory and storing into an object with properties that equal to images' codes
const weatherIcons = importAll(
  // eslint-disable-next-line no-undef
  require.context('./images/weather-icons', false, /.png$/)
);

function importAll(request) {
  let icons = {};

  request.keys().map((item) => {
    const iconId = item.slice(2, 5);
    icons[iconId] = request(item);
  });
  return icons;
}

function displayWeatherCondition() {
  // Importing json file from src/ directory
  const conditionObject = weatherConditionData;

  for (let i = 0; i < 3; i++) {
    const conditionCode =
      currentShownLocation.forecast.forecastday[i].day.condition.code;

    conditionObject.forEach((condition) => {
      if (condition.code === conditionCode) {
        const image = weatherInfoBlocks[i].children[1].children[0];
        image.src = weatherIcons[condition.icon];
        image.alt = `Weather condition: ${condition.day}`;
      }
    });
  }
}

function displayExtraWeatherInfo() {
  const locationWeatherInfo = currentShownLocation.forecast.forecastday;

  let count = 0;
  weatherInfoBlocks.forEach((block) => {
    const precipitation = block.children[3].children[0];
    const humidity = block.children[3].children[1];
    const wind = block.children[3].children[2];

    precipitation.textContent = `Precipitation: ${locationWeatherInfo[count].day.totalprecip_mm}mm`;
    humidity.textContent = `Humidity: ${locationWeatherInfo[count].day.avghumidity}%`;
    wind.textContent = `Wind(max): ${locationWeatherInfo[count].day.maxwind_kph}km/h`;
    count++;
  });
}

function keepYearInFooterUpdated() {
  const currentYear = getYear(new Date());
  footer.textContent = `${currentYear}`;
}
