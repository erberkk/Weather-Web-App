import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-air-quality-widget',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.scss']
})
export class AirQualityWidgetComponent implements OnInit {
  @Input() lat!: number;
  @Input() lon!: number;
  airQuality: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getAirQuality(this.lat, this.lon).subscribe(data => {
      this.airQuality = data;
    }, error => {
      console.error('Error fetching air quality data', error);
    });
  }
}
