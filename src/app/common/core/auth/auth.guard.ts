import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/features/user-authentication/services/user-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserAuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.isLogged$$.subscribe((isLogged) => {
      if (!isLogged) {
        this.router.navigate(['/user-authentication']);
        return false;
      } else if (isLogged) {
        this.router.navigate(['/dashboard']);
        return false;
      }
      // If the user is logged in and the route is not empty or login, allow the user to navigate
      return true;
    });
    return false;
  }
}
