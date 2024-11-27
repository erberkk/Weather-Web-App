import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelsLikeWidgetComponent } from './feels-like-widget.component';

describe('FeelsLikeWidgetComponent', () => {
  let component: FeelsLikeWidgetComponent;
  let fixture: ComponentFixture<FeelsLikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeelsLikeWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeelsLikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
