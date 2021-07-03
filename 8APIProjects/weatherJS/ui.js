class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.cloudiness = document.getElementById('w-cloudiness');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    console.log(weather);
    const countryCodes = new Country();
    this.location.textContent = `${weather.name}, ${countryCodes.findCountry(weather.sys.country)}`;
    this.desc.textContent = (weather.weather[0].description).toUpperCase();
    this.string.textContent = `${(this.convert(weather.main.temp)).celsius} ${(this.convert(weather.main.temp)).farenheit}`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '%';
    this.feelsLike.textContent = `Feels Like: ${(this.convert(weather.main.feels_like)).celsius} ${(this.convert(weather.main.feels_like)).farenheit}`;
    this.cloudiness.textContent = 'Cloudiness: ' + weather.clouds.all + '%';
    this.wind.textContent = 'Wind Speed: ' + weather.wind.speed + ' MPS';
  }

  convert(temp) {
    return {
      celsius: `${(temp - 273.15).toFixed(2)} C`,
      farenheit: `(${((temp - 273.15) * 9 / 5 + 32).toFixed(2)} F)`
    }
  }
}