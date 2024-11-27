import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCity: string = 'London'; // Default to London

  onCitySearch(city: string) {
    this.selectedCity = city;
  }
}
