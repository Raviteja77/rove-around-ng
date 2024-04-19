import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpensesPopUpComponent } from './add-expenses-pop-up.component';

describe('AddExpensesPopUpComponent', () => {
  let component: AddExpensesPopUpComponent;
  let fixture: ComponentFixture<AddExpensesPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExpensesPopUpComponent]
    });
    fixture = TestBed.createComponent(AddExpensesPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
