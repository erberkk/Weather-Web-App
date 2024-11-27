import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunriseSunsetWidgetComponent } from './sunrise-sunset-widget.component';

describe('SunriseSunsetWidgetComponent', () => {
  let component: SunriseSunsetWidgetComponent;
  let fixture: ComponentFixture<SunriseSunsetWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunriseSunsetWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunriseSunsetWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
