import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { UvIndexComponent } from './widgets/uv-index/uv-index.component';
import { MetarDisplayComponent } from './metar-display/metar-display.component';
import { TafDisplayComponent } from './taf-display/taf-display.component';

import { FeelsLikeWidgetComponent } from './widgets/feels-like-widget/feels-like-widget.component';
import { VisibilityWidgetComponent } from './widgets/visibility-widget/visibility-widget.component';
import { HumidityWidgetComponent } from './widgets/humidity-widget/humidity-widget.component';
import { WindWidgetComponent } from './widgets/wind-widget/wind-widget.component';
import { SunriseSunsetWidgetComponent } from './widgets/sunrise-sunset-widget/sunrise-sunset-widget.component';
import { PressureWidgetComponent } from './widgets/pressure-widget/pressure-widget.component';
import { AverageTemperatureWidgetComponent } from './widgets/average-temperature-widget/average-temperature-widget.component';
import { AirQualityWidgetComponent } from './widgets/air-quality/air-quality.component';
import { WeatherAlertsWidgetComponent } from './widgets/weather-alerts/weather-alerts.component';
import { PilotWeatherComponent } from './pilot-weather/pilot-weather.component';
import { AppRoutingModule } from './app-routing.module';
import { AirportSearchComponent } from './airport-search/airport-search.component';
import { AirportService } from './airport.service';
import { AviationWeatherService } from './aviation-weather.service';
import { MagneticDeclinationService } from './magnetic-declination.service';
import { SunriseSunsetService } from './sunrise-sunset.service';
import { ElevationService } from './elevation.service';

import { firebaseApp, auth } from '../firebase-config';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    NavbarComponent,
    WeatherCardComponent,
    HourlyForecastComponent,
    UvIndexComponent,
    MetarDisplayComponent,
    TafDisplayComponent,
    FeelsLikeWidgetComponent,
    VisibilityWidgetComponent,
    HumidityWidgetComponent,
    WindWidgetComponent,
    SunriseSunsetWidgetComponent,
    PressureWidgetComponent,
    AverageTemperatureWidgetComponent,
    AirQualityWidgetComponent,
    WeatherAlertsWidgetComponent,
    PilotWeatherComponent,
    AirportSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    AppRoutingModule,
    MatAutocompleteModule,
    NgbModule
  ],
  providers: [
    AviationWeatherService,
    AirportService,
    MagneticDeclinationService,
    SunriseSunsetService,
    ElevationService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
