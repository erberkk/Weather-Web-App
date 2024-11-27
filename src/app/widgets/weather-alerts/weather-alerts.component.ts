import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather-alerts-widget',
  templateUrl: './weather-alerts.component.html',
  styleUrls: ['./weather-alerts.component.scss']
})
export class WeatherAlertsWidgetComponent implements OnInit {
  @Input() city!: string;
  alerts: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherAlerts(this.city).subscribe(data => {
      this.alerts = data;
    }, error => {
      console.error('Error fetching weather alerts', error);
    });
  }
}
