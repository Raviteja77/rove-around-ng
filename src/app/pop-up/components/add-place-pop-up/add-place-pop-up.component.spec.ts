import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlacePopUpComponent } from './add-place-pop-up.component';

describe('AddPlacePopUpComponent', () => {
  let component: AddPlacePopUpComponent;
  let fixture: ComponentFixture<AddPlacePopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlacePopUpComponent]
    });
    fixture = TestBed.createComponent(AddPlacePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
