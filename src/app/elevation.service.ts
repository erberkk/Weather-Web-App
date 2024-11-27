import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElevationService {
  private apiUrl: string = 'https://api.open-elevation.com/api/v1/lookup';

  constructor(private http: HttpClient) {}

  getElevation(lat: number, lon: number): Observable<any> {
    const body = { locations: [{ latitude: lat, longitude: lon }] };
    return this.http.post<any>(this.apiUrl, body).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<any> {
    console.error('Error fetching Elevation data', error);
    return throwError('Error fetching Elevation data');
  }
}
