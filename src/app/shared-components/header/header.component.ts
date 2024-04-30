import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/features/user-authentication/services/user-authentication.service';
import { UserAuthentication } from 'src/app/models/user-authentication.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn = false;
  userStateManagement!: UserAuthentication;

  constructor(
    private router: Router,
    private userAuthService: UserAuthenticationService
  ) {}

  ngOnInit(): void {
    this.userAuthService.isUserLoggedIn$.subscribe((res) => {
      this.isUserLoggedIn = res;
      this.userStateManagement =
        this.userAuthService.getStoredUserStateManagement();
      if (this.userStateManagement) {
        this.isUserLoggedIn = this.userStateManagement.isAuthorized;
      }
    });
  }

  signUp() {
    this.router.navigate(['user-authentication'], {
      queryParams: {
        operation: 'signUp',
      },
    });
  }

  signIn() {
    this.router.navigate(['user-authentication'], {
      queryParams: {
        operation: 'signIn',
      },
    });
  }

  logout() {
    const userStateManagement =
      this.userAuthService.getStoredUserStateManagement();
    this.userAuthService.logout(userStateManagement?.token);
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
