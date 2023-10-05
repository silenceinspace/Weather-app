export { fetchLocation };

function fetchLocation(
  location,
  callbackToGetWeatherObject,
  errorMessage,
  loaderElement
) {
  loaderElement();
  const request = fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=e1f664d77dd7414a88681100232009&q=${location}&days=3`
  );

  request
    .then((response) => {
      return new Promise((resolve, reject) => {
        // Show a search result only after 0.5s to demonstrate loading
        setTimeout(() => {
          if (response.status == 200) {
            errorMessage.textContent = '';
            console.log(response);
            resolve(response.json());
          } else {
            errorMessage.textContent = 'Location was not found!';
            reject(new Error('Location was not found!'));
          }
          loaderElement();
        }, 500);
      });
    })
    .then((object) => {
      callbackToGetWeatherObject(object);
    })
    .catch((err) => {
      console.log(err);
    });
}
