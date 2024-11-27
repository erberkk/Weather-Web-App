import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feels-like-widget',
  templateUrl: './feels-like-widget.component.html',
  styleUrls: ['./feels-like-widget.component.scss']
})
export class FeelsLikeWidgetComponent {
  @Input() feelsLike!: number;
}
