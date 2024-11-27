import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metar-display',
  templateUrl: './metar-display.component.html',
  styleUrls: ['./metar-display.component.scss']
})
export class MetarDisplayComponent {
  @Input() metar: any;
}
