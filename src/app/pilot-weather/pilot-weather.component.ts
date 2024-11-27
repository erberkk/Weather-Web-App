import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AviationWeatherService } from '../aviation-weather.service';
import { AirportService } from '../airport.service';
import { MagneticDeclinationService } from '../magnetic-declination.service';
import { SunriseSunsetService } from '../sunrise-sunset.service';
import { ElevationService } from '../elevation.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pilot-weather',
  templateUrl: './pilot-weather.component.html',
  styleUrls: ['./pilot-weather.component.scss']
})
export class PilotWeatherComponent implements OnInit, OnDestroy {
  city!: string;
  metar: any;
  taf: any;
  notam: any;
  airportInfo: any = {};
  warningMessage: string | null = null;
  private refreshSubscription: Subscription | null = null;

  constructor(
    private route: ActivatedRoute,
    private aviationWeatherService: AviationWeatherService,
    private airportService: AirportService,
    private magneticDeclinationService: MagneticDeclinationService,
    private sunriseSunsetService: SunriseSunsetService,
    private elevationService: ElevationService
  ) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('city')!;
    this.getDetailedWeather(this.city);

    // Poll the API every 5 minutes (300000 milliseconds)
    this.refreshSubscription = interval(300000).subscribe(() => {
      this.getDetailedWeather(this.city);
    });
  }

  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  onAirportSelected(airport: string) {
    this.city = airport;
    this.getDetailedWeather(airport);
  }

  getDetailedWeather(city: string) {
    this.airportInfo = this.airportService.getAirportInfo(city);
    const stationCode = this.airportService.getStationCode(city);

    if (!stationCode) {
      console.error('Unknown station code for city:', city);
      this.warningMessage = 'Unknown station code for the selected city.';
      return;
    }

    this.warningMessage = null;
    this.metar = null;
    this.taf = null;
    this.notam = null;

    this.aviationWeatherService.getMetar(stationCode).subscribe((data: any) => {
      this.metar = data;
      this.updateWarningMessage();
      if (this.airportInfo && this.airportInfo.latitude && this.airportInfo.longitude) {
        this.fetchAdditionalData(this.airportInfo.latitude, this.airportInfo.longitude);
      } else {
        console.error('Coordinates not found for the airport in the JSON data');
        this.warningMessage = 'Coordinates not found for the airport.';
      }
      console.log('METAR:', data); // Debugging
    }, error => {
      console.error('Error fetching METAR data', error);
      this.updateWarningMessage();
    });

    this.aviationWeatherService.getTaf(stationCode).subscribe((data: any) => {
      this.taf = data;
      this.updateWarningMessage();
      console.log('TAF:', data); // Debugging
    }, error => {
      console.error('Error fetching TAF data', error);
      this.updateWarningMessage();
    });

    this.aviationWeatherService.getNotam(stationCode).then(notamObservable => {
      notamObservable.subscribe((data: any) => {
        this.notam = data;
        this.updateWarningMessage();
        console.log('NOTAM:', data); // Debugging
      }, error => {
        if (error.message.includes('403')) {
          this.warningMessage = 'NOTAM data is unavailable due to access restrictions.';
        }
        console.error('Error fetching NOTAM data', error);
        this.updateWarningMessage();
      });
    }).catch(error => {
      console.error('Error preparing NOTAM request', error);
      this.updateWarningMessage();
    });
  }

  fetchAdditionalData(lat: number, lon: number) {
    this.magneticDeclinationService.getMagneticDeclination(lat, lon).subscribe((data: any) => {
      if (data.result && data.result[0] && data.result[0].declination) {
        this.airportInfo.magnetic_declination = data.result[0].declination;
      } else {
        this.airportInfo.magnetic_declination = 'N/A';
      }
    }, error => {
      console.error('Error fetching Magnetic Declination data', error);
      this.airportInfo.magnetic_declination = 'N/A';
    });

    this.sunriseSunsetService.getSunriseSunset(lat, lon).subscribe((data: any) => {
      const results = data.results;
      this.airportInfo.dawn = results.civil_twilight_begin;
      this.airportInfo.dusk = results.civil_twilight_end;
      this.airportInfo.sunrise = results.sunrise;
      this.airportInfo.sunset = results.sunset;
    }, error => {
      console.error('Error fetching Sunrise/Sunset data', error);
      this.airportInfo.dawn = 'N/A';
      this.airportInfo.dusk = 'N/A';
      this.airportInfo.sunrise = 'N/A';
      this.airportInfo.sunset = 'N/A';
    });

    this.elevationService.getElevation(lat, lon).subscribe((data: any) => {
      if (data.results && data.results.length > 0) {
        this.airportInfo.elevation = data.results[0].elevation;
      } else {
        console.error('Elevation data not found');
        this.airportInfo.elevation = 'N/A';
      }
    }, error => {
      console.error('Error fetching Elevation data', error);
      this.airportInfo.elevation = 'N/A';
    });
  }

  updateWarningMessage() {
    if (!this.metar && !this.taf) {
      this.warningMessage = 'Both METAR and TAF data are unavailable.';
    } else if (!this.metar) {
      this.warningMessage = 'METAR data is unavailable.';
    } else if (!this.taf) {
      this.warningMessage = 'TAF data is unavailable.';
    } else if (!this.notam) {
      this.warningMessage = 'NOTAM data is unavailable.';
    } else {
      this.warningMessage = null;
    }
  }
}
