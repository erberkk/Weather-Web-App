import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MagneticDeclinationService {
  private apiUrl: string = 'https://www.ngdc.noaa.gov/geomag-web/calculators/calculateIgrfwmm';
  private apiKey: string = 'YOUR-ACCESS-KEY';

  constructor(private http: HttpClient) {}

  getMagneticDeclination(lat: number, lon: number): Observable<any> {
    const params = {
      lat1: lat.toString(),
      lon1: lon.toString(),
      model: 'WMM',
      startYear: new Date().getFullYear().toString(),
      endYear: new Date().getFullYear().toString(),
      key: this.apiKey,
      resultFormat: 'json'
    };

    const url = `${this.apiUrl}?${this.encodeParams(params)}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  private encodeParams(params: any): string {
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }

  private handleError(error: any): Observable<any> {
    console.error('Error fetching Magnetic Declination data', error);
    return throwError('Error fetching Magnetic Declination data');
  }
}
