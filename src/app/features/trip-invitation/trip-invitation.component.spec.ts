import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripInvitationComponent } from './trip-invitation.component';

describe('TripInvitationComponent', () => {
  let component: TripInvitationComponent;
  let fixture: ComponentFixture<TripInvitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripInvitationComponent]
    });
    fixture = TestBed.createComponent(TripInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
