import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { UserAuthentication } from 'src/app/models/user-authentication.model';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  userStateManagement: UserAuthentication = {
    token: '',
    isAuthorized: false,
    errorMessage: ''
  }

  public isUserChanged$$ = new BehaviorSubject<boolean>(false);
  public isUserChanged$ = this.isUserChanged$$.asObservable();
  public isLogged$$: Subject<boolean> = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) {}

  setUserStateManagement() {
    sessionStorage.setItem('userStateManagement', JSON.stringify(this.userStateManagement));
  }

  getStoredUserStateManagement() {
    const storedList = sessionStorage.getItem('userStateManagement');
    return storedList ? JSON.parse(storedList) : [];
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
    return this.http.post(environment.endpoints.logout, {
      headers: { Authorization: authorizationToken },
    }).subscribe({
      next: (response: any) => {
        this.userStateManagement.token = '';
        this.userStateManagement.isAuthorized = false;
        this.userStateManagement.errorMessage = '';
        sessionStorage.clear();
        this.isUserChanged$$.next(true);
      },
      error: (e) => console.log(e)
    });
  }
}
