import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/features/user-authentication/services/user-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn = false;

  constructor(
    private router: Router,
    private userAuthService: UserAuthenticationService
  ) {}

  ngOnInit(): void {
    this.userAuthService.isLogged$$.subscribe((res) => {
      this.isUserLoggedIn = res;
    });
  }

  signUp() {
    this.router.navigate(['user-authentication']);
  }

  signIn() {
    this.router.navigate(['user-authentication']);
  }

  logout() {
    this.router.navigate(['user-authentication']);
  }

  onIconOrTitleClick() {
    if (this.isUserLoggedIn) {
      this.router.navigate(['dashboard']);
    } else {
      this.signIn();
    }
  }
}
