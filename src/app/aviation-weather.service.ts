import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AviationWeatherService {
  private avwxApiUrl: string = 'https://avwx.rest/api'; // AVWX API base URL
  private openAipApiUrl: string = 'https://api.core.openaip.net/api'; // OpenAIP API base URL
  private openElevationUrl: string = 'https://api.open-elevation.com/api/v1/lookup'; // Open-Elevation API URL
  private avwxApiKey: string = 'Your AVWX API key'; // Your AVWX API key
  private openAipClientId: string = environment.openAip.clientId; // Your OpenAIP client ID

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAvwxHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.avwxApiKey}`
    });
  }

  private async getOpenAipHeaders(): Promise<HttpHeaders> {
    const token = await this.authService.getIdToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'x-openaip-client-id': this.openAipClientId
    });
  }

  getMetar(station: string): Observable<any> {
    const url = `${this.avwxApiUrl}/metar/${station}`;
    return this.http.get(url, { headers: this.getAvwxHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  getTaf(station: string): Observable<any> {
    const url = `${this.avwxApiUrl}/taf/${station}`;
    return this.http.get(url, { headers: this.getAvwxHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  async getNotam(icao: string): Promise<Observable<any>> {
    const headers = await this.getOpenAipHeaders();
    const url = `${this.openAipApiUrl}/notam/${icao}`; // Update the endpoint if necessary
    return this.http.get(url, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getMagneticDeclination(lat: number, lon: number): Observable<any> {
    const url = `${this.openAipApiUrl}/v1/declination?lat=${lat}&lon=${lon}`; // Update the endpoint if necessary
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getSunriseSunset(lat: number, lon: number): Observable<any> {
    const url = `${this.openAipApiUrl}/v1/sunrise-sunset?lat=${lat}&lon=${lon}`; // Update the endpoint if necessary
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getElevation(lat: number, lon: number): Observable<any> {
    const url = this.openElevationUrl;
    const body = { locations: [{ latitude: lat, longitude: lon }] };
    return this.http.post(url, body).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      console.error('Unauthorized - Invalid API key');
    } else if (error.status === 403) {
      console.error('Forbidden - API key does not have access to this resource');
    } else if (error.status === 404) {
      console.error('Not Found - The requested resource could not be found');
    } else {
      console.error('API call error', error);
    }
    return throwError(() => new Error('API call error'));
  }
}
