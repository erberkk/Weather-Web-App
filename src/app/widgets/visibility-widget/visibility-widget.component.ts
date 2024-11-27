import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visibility-widget',
  templateUrl: './visibility-widget.component.html',
  styleUrls: ['./visibility-widget.component.scss']
})
export class VisibilityWidgetComponent {
  @Input() visibility!: number;
}
