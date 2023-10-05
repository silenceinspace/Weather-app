export { checkLocalStorage, populateLocalStorage };

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
