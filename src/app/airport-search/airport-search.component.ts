import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AirportService } from '../airport.service';

@Component({
  selector: 'app-airport-search',
  templateUrl: './airport-search.component.html',
  styleUrls: ['./airport-search.component.scss']
})
export class AirportSearchComponent implements OnInit {
  @Output() airportSelected = new EventEmitter<string>();
  search: string = '';
  airports: any[] = [];
  filteredAirports: any[] = [];

  constructor(private airportService: AirportService) { }

  ngOnInit() {
    this.airportService.getAirports().subscribe(data => {
      this.airports = data;
    });
  }

  onSearchChange() {
    this.filteredAirports = this.airports.filter(airport =>
      airport.region_name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  selectAirport(airport: string) {
    this.airportSelected.emit(airport);
    this.search = '';
    this.filteredAirports = [];
  }
}
