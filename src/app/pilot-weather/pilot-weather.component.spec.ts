import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotWeatherComponent } from './pilot-weather.component';

describe('PilotWeatherComponent', () => {
  let component: PilotWeatherComponent;
  let fixture: ComponentFixture<PilotWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
