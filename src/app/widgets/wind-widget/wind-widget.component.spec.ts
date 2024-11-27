import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindWidgetComponent } from './wind-widget.component';

describe('WindWidgetComponent', () => {
  let component: WindWidgetComponent;
  let fixture: ComponentFixture<WindWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
