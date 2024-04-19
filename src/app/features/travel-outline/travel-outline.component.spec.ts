import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOutlineComponent } from './travel-outline.component';

describe('TravelOutlineComponent', () => {
  let component: TravelOutlineComponent;
  let fixture: ComponentFixture<TravelOutlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelOutlineComponent]
    });
    fixture = TestBed.createComponent(TravelOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
