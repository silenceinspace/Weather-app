export { fetchLocation };

function fetchLocation(location, success, error) {
  const request = fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=e1f664d77dd7414a88681100232009&q=${location}&days=3`
  );

  request
    .then((response) => {
      if (response.status == 200) {
        error.textContent = '';
        return response.json();
      } else {
        error.textContent = 'Location was not found';
        throw new Error('Location was not found');
      }
    })
    .then((object) => {
      console.log(object);
      success(object);
    })
    .catch((err) => {
      console.log(err);
    });
}