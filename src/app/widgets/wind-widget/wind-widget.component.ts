import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-widget',
  templateUrl: './wind-widget.component.html',
  styleUrls: ['./wind-widget.component.scss']
})
export class WindWidgetComponent {
  @Input() windSpeed!: number;
  @Input() windDirection!: number;

  getWindDirection(degree: number): string {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
  }
}
