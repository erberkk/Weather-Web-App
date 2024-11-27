import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TafDisplayComponent } from './taf-display.component';

describe('TafDisplayComponent', () => {
  let component: TafDisplayComponent;
  let fixture: ComponentFixture<TafDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TafDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TafDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
