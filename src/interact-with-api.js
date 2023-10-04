export { fetchLocation };

function fetchLocation(location, callbackToGetWeatherObject, errorMessage) {
  const request = fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=e1f664d77dd7414a88681100232009&q=${location}&days=3`
  );

  request
    .then((response) => {
      if (response.status == 200) {
        errorMessage.textContent = '';
        return response.json();
      } else {
        errorMessage.textContent = 'Location was not found';
        throw new Error('Location was not found');
      }
    })
    .then((object) => {
      callbackToGetWeatherObject(object);
    })
    .catch((err) => {
      console.log(err);
    });
}
