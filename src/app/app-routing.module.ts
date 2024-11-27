import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { PilotWeatherComponent } from './pilot-weather/pilot-weather.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'detailed-weather/:city', component: PilotWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
