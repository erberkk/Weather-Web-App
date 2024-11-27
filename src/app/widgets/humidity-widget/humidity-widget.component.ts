import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-humidity-widget',
  templateUrl: './humidity-widget.component.html',
  styleUrls: ['./humidity-widget.component.scss']
})
export class HumidityWidgetComponent {
  @Input() humidity!: number;
}
