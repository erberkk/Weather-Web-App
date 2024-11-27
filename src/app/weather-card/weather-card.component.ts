import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() weather: any;
  @Input() forecast: any;

  getTempColor(temp: number): string {
    if (temp < 10) {
      return 'blue';
    } else if (temp < 20) {
      return 'green';
    } else if (temp < 30) {
      return 'orange';
    } else {
      return 'red';
    }
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
}
