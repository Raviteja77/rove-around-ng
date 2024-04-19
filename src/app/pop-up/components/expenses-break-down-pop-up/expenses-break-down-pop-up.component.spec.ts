import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesBreakDownPopUpComponent } from './expenses-break-down-pop-up.component';

describe('ExpensesBreakDownPopUpComponent', () => {
  let component: ExpensesBreakDownPopUpComponent;
  let fixture: ComponentFixture<ExpensesBreakDownPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesBreakDownPopUpComponent]
    });
    fixture = TestBed.createComponent(ExpensesBreakDownPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
