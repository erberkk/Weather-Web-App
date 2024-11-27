import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityWidgetComponent } from './visibility-widget.component';

describe('VisibilityWidgetComponent', () => {
  let component: VisibilityWidgetComponent;
  let fixture: ComponentFixture<VisibilityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisibilityWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisibilityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
