const storage = new Storage();
const weatherLocation = storage.getLocationData();

const wethr = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather());
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  let country = document.getElementById('country').value;

  if (city !== '' && country === '') {
    alert('Please enter a country');

  } else if (country !== '') {
    const c = new Country();
    for (const [key, value] of Object.entries(c.isoCountries)) {
      if (value.toLowerCase() === country.toLowerCase()) {
        country = key;
      }
    }
    wethr.changeLocation(city, country);
    storage.setLocationData(city, country);

    getWeather();

    $('#locModal').modal('hide');
  }

  e.preventDefault(e);
});

function getWeather() {
  wethr.getWeather()
    .then(res => {
      ui.paint(res);
    });
}

