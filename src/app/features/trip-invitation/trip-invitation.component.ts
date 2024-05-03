import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/models/user.model';
import { UserAuthenticationService } from '../user-authentication/services/user-authentication.service';
import { TripInvitationService } from './services/trip-invitation.service';

@Component({
  selector: 'app-trip-invitation',
  templateUrl: './trip-invitation.component.html',
  styleUrls: ['./trip-invitation.component.scss'],
})
export class TripInvitationComponent implements OnInit {
  user!: Iuser;
  tripCode: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripInvitationService: TripInvitationService,
    private authService: UserAuthenticationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.tripCode = params['code'];
    });
    this.user = this.authService.getStoredUserStateManagement().user;
  }

  notAccept() {
    this.router.navigate(['dashbroad']);
  }

  accept() {
    const response = {
      user: this.user,
      tripCode: this.tripCode,
    };
    this.tripInvitationService.addTraveler(response).subscribe({
      next: () => {
        this.router.navigate(['trip-details', this.tripCode]);
      },
      error: () => {},
    });
  }
}
