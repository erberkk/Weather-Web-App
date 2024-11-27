import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SunriseSunsetService {
  private apiUrl: string = 'https://api.sunrise-sunset.org/json';

  constructor(private http: HttpClient) {}

  getSunriseSunset(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?lat=${lat}&lng=${lon}&formatted=0`);
  }
}
