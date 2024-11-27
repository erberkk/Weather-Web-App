import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sunrise-sunset-widget',
  templateUrl: './sunrise-sunset-widget.component.html',
  styleUrls: ['./sunrise-sunset-widget.component.scss']
})
export class SunriseSunsetWidgetComponent {
  @Input() sunrise!: number;
  @Input() sunset!: number;

  convertUnixTime(unixTime: number): string {
    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString();
  }
}
