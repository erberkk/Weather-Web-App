import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageTemperatureWidgetComponent } from './average-temperature-widget.component';

describe('AverageTemperatureWidgetComponent', () => {
  let component: AverageTemperatureWidgetComponent;
  let fixture: ComponentFixture<AverageTemperatureWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AverageTemperatureWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageTemperatureWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
