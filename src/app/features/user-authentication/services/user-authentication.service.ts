import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  public isLogged$$: Subject<boolean> = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  postLoginDetais(details: ILoggeduser) {
    const users = localStorage.getItem('users');
    if (users) {
      const mockUsers = JSON.parse(users);
      const user = mockUsers.find(
        (u: ILoggeduser) =>
          u.email === details.email && u.password === details.password
      );
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      this.isLogged$$?.next(true);
      return of(user);
    }
    return of(null);
  }

  postRegisterDetails(details: IRegisterUser) {
    const users = localStorage.getItem('users');
    if (users) {
      const mockUsers = JSON.parse(users);
      mockUsers.push(details);
      localStorage.setItem('users', JSON.stringify(mockUsers));
    } else {
      localStorage.setItem('users', JSON.stringify([details]));
    }
    return of(details);
  }
}

export interface ILoggeduser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}
