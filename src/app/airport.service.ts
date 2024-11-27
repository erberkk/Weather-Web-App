import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private jsonUrl = 'assets/iata-icao.json';
  private airports: any[] = [];

  constructor(private http: HttpClient) {
    this.loadAirports();
  }

  private loadAirports() {
    this.http.get<any[]>(this.jsonUrl).subscribe(data => {
      this.airports = data;
    });
  }

  getAirports(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getAirportInfo(city: string): any {
    return this.airports.find(a => a.region_name.toLowerCase() === city.toLowerCase());
  }

  getStationCode(city: string): string | undefined {
    const airport = this.getAirportInfo(city);
    return airport ? airport.icao : undefined;
  }
}
