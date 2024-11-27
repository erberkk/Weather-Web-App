import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss']
})
export class HourlyForecastComponent implements OnChanges {
  @Input() forecast: any[] = [];
  filteredForecast: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['forecast']) {
      this.filterForecastForToday();
    }
  }

  filterForecastForToday() {
    const now = new Date();
    const currentHour = now.getHours();
    const todayDate = now.getDate();


    this.filteredForecast = this.forecast.filter(f => {
      const forecastDate = new Date(f.dt_txt);
      const forecastHour = forecastDate.getHours();
      const forecastDay = forecastDate.getDate();


      return forecastDay === todayDate && forecastHour >= currentHour;
    });

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
