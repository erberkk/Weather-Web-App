import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pressure-widget',
  templateUrl: './pressure-widget.component.html',
  styleUrls: ['./pressure-widget.component.scss']
})
export class PressureWidgetComponent {
  @Input() pressure!: number;
}
