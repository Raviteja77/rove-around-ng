import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { UserAuthentication } from 'src/app/models/user-authentication.model';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  userStateManagement: UserAuthentication = {
    token: '',
    isAuthorized: false,
    errorMessage: '',
    user: {
      userId: 0,
      userName: '',
      email: '',
      password: '',
      role: '',
      status: false,
    },
  };

  public isUserLoggedIn$$ = new BehaviorSubject<boolean>(false);
  public isUserLoggedIn$ = this.isUserLoggedIn$$.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  setUserStateManagement() {
    sessionStorage.setItem(
      'userStateManagement',
      JSON.stringify(this.userStateManagement)
    );
  }

  getStoredUserStateManagement() {
    const storedUser = sessionStorage.getItem('userStateManagement');
    return storedUser ? JSON.parse(storedUser) : {};
  }

  register(postRegisterDetails: any) {
    return this.http.post(environment.endpoints.register, {
      email: postRegisterDetails.email,
      userName: postRegisterDetails.userName,
      password: postRegisterDetails.password,
    });
  }

  login(postLoginDetails: any) {
    return this.http.post(environment.endpoints.login, {
      email: postLoginDetails.email,
      password: postLoginDetails.password,
    });
  }

  logout(authorizationToken: string) {
    return this.http
      .post(environment.endpoints.logout, {
        headers: { Authorization: authorizationToken },
      })
      .subscribe({
        next: (response: any) => {
          this.userStateManagement.token = '';
          this.userStateManagement.isAuthorized = false;
          this.userStateManagement.errorMessage = '';
          sessionStorage.clear();
          this.isUserLoggedIn$$.next(true);
        },
        error: (e) => console.log(e),
      });
  }
}
