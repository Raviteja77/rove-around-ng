import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBudgetPopUpComponent } from './add-edit-budget-pop-up.component';

describe('AddEditBudgetPopUpComponent', () => {
  let component: AddEditBudgetPopUpComponent;
  let fixture: ComponentFixture<AddEditBudgetPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditBudgetPopUpComponent]
    });
    fixture = TestBed.createComponent(AddEditBudgetPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
