import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-uv-index',
  templateUrl: './uv-index.component.html',
  styleUrls: ['./uv-index.component.scss']
})
export class UvIndexComponent implements OnChanges {
  @Input() uvIndex: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    // Herhangi bir değişiklik olduğunda yapılacak işlemler
  }

  getUvIndexLevel(): string {
    if (this.uvIndex <= 2) {
      return 'low';
    } else if (this.uvIndex <= 5) {
      return 'moderate';
    } else if (this.uvIndex <= 7) {
      return 'high';
    } else if (this.uvIndex <= 10) {
      return 'very-high';
    } else {
      return 'extreme';
    }
  }
}
