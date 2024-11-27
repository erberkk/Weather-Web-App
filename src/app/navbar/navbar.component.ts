import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AirportService } from '../airport.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() citySearch = new EventEmitter<string>();
  search: string = '';
  cities: string[] = [];
  filteredCities: string[] = [];

  constructor(private airportService: AirportService) { }

  ngOnInit() {
    this.airportService.getAirports().subscribe(data => {
      this.cities = data.map(airport => airport.region_name);
    });
  }

  searchWeather() {
    if (this.search.trim()) {
      this.citySearch.emit(this.search.trim());
    }
  }

  onSearchChange() {
    this.filteredCities = this.cities.filter(city =>
      city.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
