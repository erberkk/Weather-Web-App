import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnChanges {
  @Input() city: string = 'London';
  weather: any;
  forecast: any;
  uvIndex: number | undefined;
  historicalData: any[] = [];  // Initialize historicalData as an empty array
  averageTemp: number | undefined;
  apiKey: string = '988270891a1348715692b79d279e4b2d';

  constructor(private weatherService: WeatherService, private router: Router) { }

  goToDetailedWeather() {
    console.log('Button clicked');
    this.router.navigate(['/detailed-weather', this.city]);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['city']) {
      this.getWeather(this.city);
    }
  }

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe(data => {
      this.weather = data;
      this.getForecast(city);
      this.getUvIndex(this.weather.coord.lat, this.weather.coord.lon);
      this.getHistoricalData(this.weather.coord.lat, this.weather.coord.lon);
    }, error => {
      console.error('Error fetching weather data', error);
    });
  }

  getForecast(city: string) {
    this.weatherService.getForecast(city).subscribe(data => {
      this.forecast = data;
    }, error => {
      console.error('Error fetching forecast data', error);
    });
  }

  getUvIndex(lat: number, lon: number) {
    this.weatherService.getUvIndex(lat, lon).subscribe(data => {
      this.uvIndex = data.value;
    }, error => {
      console.error('Error fetching UV index data', error);
    });
  }

  getHistoricalData(lat: number, lon: number) {
    this.weatherService.getHistoricalData(lat, lon).subscribe(data => {
      this.historicalData = data;
      this.averageTemp = this.calculateAverageTemp(this.historicalData);
    }, error => {
      console.error('Error fetching historical weather data', error);
    });
  }

  getFiveDayForecast(list: any[]) {
    return list.filter((item, index) => index % 8 === 0);
  }

  calculateAverageTemp(data: any[]): number {
    let sum = 0;
    let count = 0;
    for (let item of data) {
      sum += item.main.temp;
      count++;
    }
    return sum / count;
  }

  getWeatherIcon(weatherType: string): string {
    switch (weatherType.toLowerCase()) {
      case 'clear':
        return 'assets/sun.gif';
      case 'clouds':
        return 'assets/cloudy-night.gif';
      case 'rain':
        return 'assets/rain.gif';
      case 'snow':
        return 'assets/snow.gif';
      case 'thunderstorm':
        return 'assets/storm.gif';
      case 'drizzle':
        return 'assets/rain.gif';
      case 'mist':
        return 'assets/foggy.gif';
      default:
        return 'assets/wind.gif';
    }
  }

  getBackgroundImage(weatherType: string): string {
    switch (weatherType.toLowerCase()) {
      case 'clear':
        return 'url("assets/images/sunny-day.jpg")';
      case 'clouds':
        return 'url("assets/images/cloudy-day.jpg")';
      case 'rain':
        return 'url("assets/images/rainy-day.jpg")';
      case 'snow':
        return 'url("assets/images/snowy-day.jpg")';
      case 'thunderstorm':
        return 'url("assets/images/stormy-day.jpg")';
      case 'drizzle':
        return 'url("assets/images/rainy-day.jpg")';
      case 'mist':
        return 'url("assets/images/misty-day.jpg")';
      default:
        return 'url("assets/images/cloudy-day.jpg")'; // Varsayılan arka plan
    }
  }

}
