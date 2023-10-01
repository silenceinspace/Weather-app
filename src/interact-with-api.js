export { fetchLocation };

function fetchLocation(location) {
  const request = fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=e1f664d77dd7414a88681100232009&q=${location}&days=3`
  );

  request
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error('Location was not found');
      }
    })
    .then((object) => consoleLogData(object))
    .catch((err) => console.log(err));
}

function consoleLogData(dataObject) {
  console.log(dataObject);
  console.log(`Country: ${dataObject.location.country}`);
  console.log(`City: ${dataObject.location.name}`);
  console.log(`Localtime: ${dataObject.location.localtime}`);

  console.log(`Current condition: ${dataObject.current.condition.text}`);
  console.log(`Temperature in Celsius (now): ${dataObject.current.temp_c}`);
  console.log(`Temperature in Fahrenheit (now): ${dataObject.current.temp_f}`);

  console.log('Forecast for next 3 days');
  console.log(`1) Date: ${dataObject.forecast.forecastday[0].date}`);
  console.log('Info about day:');
  console.log(dataObject.forecast.forecastday[0].day);

  console.log(`2) Date: ${dataObject.forecast.forecastday[1].date}`);
  console.log('Info about day:');
  console.log(dataObject.forecast.forecastday[1].day);

  console.log(`3) Date: ${dataObject.forecast.forecastday[2].date}`);
  console.log('Info about day:');
  console.log(dataObject.forecast.forecastday[2].day);
}
