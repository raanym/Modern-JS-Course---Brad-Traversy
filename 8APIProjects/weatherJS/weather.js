class Weather {
  constructor(city, state) {
    this.apiKey = 'f9831e82f26356ac1b6cb27e6f537cba'
    this.city = city;
    this.country = country;
  }

  // fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

    const resData = await response.json();

    return resData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}