import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNotesPopUpComponent } from './add-edit-notes-pop-up.component';

describe('AddEditNotesPopUpComponent', () => {
  let component: AddEditNotesPopUpComponent;
  let fixture: ComponentFixture<AddEditNotesPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditNotesPopUpComponent]
    });
    fixture = TestBed.createComponent(AddEditNotesPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
