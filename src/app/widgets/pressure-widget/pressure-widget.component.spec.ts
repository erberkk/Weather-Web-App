import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureWidgetComponent } from './pressure-widget.component';

describe('PressureWidgetComponent', () => {
  let component: PressureWidgetComponent;
  let fixture: ComponentFixture<PressureWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressureWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressureWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
