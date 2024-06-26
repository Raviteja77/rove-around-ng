import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenticationService } from 'src/app/features/user-authentication/services/user-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userAuthenticationService: UserAuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.userAuthenticationService.isUserLoggedIn$.subscribe((_) => {
      const userState =
        this.userAuthenticationService.getStoredUserStateManagement();
      if (!userState.token) {
        this.router.navigate(['/user-authentication']);
        return false;
      }
      return true;
    });
    return true;
  }
}
