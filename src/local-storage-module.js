export { checkLocalStorage, populateLocalStorage };

// If nothing has been added to local storage yet, then a default value of "Prague" will be set to display data. Otherwise a weather object is returned and used for DOM
function checkLocalStorage() {
  if (window.localStorage.length === 0) {
    return false;
  } else {
    return getDataFromLocalStorage();
  }
}

function populateLocalStorage(object) {
  localStorage.setItem('current-location', JSON.stringify(object));
}

function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem('current-location'));
}
