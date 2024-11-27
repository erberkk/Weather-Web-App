import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = 'YOUR-API-KEY';
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getUvIndex(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}/uvi?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getHistoricalData(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url).pipe(
      map(response => response.list),
      catchError(this.handleError)
    );
  }

  getAirQuality(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}/air_pollution?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getWeatherAlerts(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url).pipe(
      map(response => response.alerts || []),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      console.error('Unauthorized - Invalid API key');
    } else {
      console.error('API call error', error);
    }
    return throwError(() => new Error('API call error'));
  }
}
