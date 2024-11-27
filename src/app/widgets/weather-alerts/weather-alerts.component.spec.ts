import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAlertsComponent } from './weather-alerts.component';

describe('WeatherAlertsComponent', () => {
  let component: WeatherAlertsComponent;
  let fixture: ComponentFixture<WeatherAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
