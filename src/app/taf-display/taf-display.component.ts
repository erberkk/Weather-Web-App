import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taf-display',
  templateUrl: './taf-display.component.html',
  styleUrls: ['./taf-display.component.scss']
})
export class TafDisplayComponent {
  @Input() taf: any;
}
