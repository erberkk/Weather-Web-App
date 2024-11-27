import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-average-temperature-widget',
  templateUrl: './average-temperature-widget.component.html',
  styleUrls: ['./average-temperature-widget.component.scss']
})
export class AverageTemperatureWidgetComponent {
  @Input() averageTemp!: number;
  @Input() currentTemp!: number;

  get difference(): number {
    return this.currentTemp - this.averageTemp;
  }
}
