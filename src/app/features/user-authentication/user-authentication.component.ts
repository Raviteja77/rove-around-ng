import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserAuthenticationService } from './services/user-authentication.service';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss'],
})
export class UserAuthenticationComponent implements OnInit {
  signUpForm: FormGroup;
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userAuthenticationService: UserAuthenticationService,
    private activedRoute: ActivatedRoute
  ) {
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    this.activedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams['operation'] && queryParams['operation'] === 'signUp') {
        const UserAuthenticationContainer = document.getElementById(
          'user-authentication-container'
        );
        if (UserAuthenticationContainer) {
          this.toggleToOtherForm('register', UserAuthenticationContainer);
        }
      }
    });
  }

  toggleToOtherForm(formName: string, container: HTMLElement) {
    if (formName === 'login') {
      container.classList.remove('active');
    } else {
      container.classList.add('active');
    }
  }

  onLoginSubmit(): void {
    if (this.signInForm.invalid) {
      if (this.signInForm.get('email')?.invalid) {
        this.signInForm.get('email')?.markAsDirty();
      }
      if (this.signInForm.get('password')?.invalid) {
        this.signInForm.get('password')?.markAsDirty();
      }
      return;
    } else {
      this.userAuthenticationService.login(this.signInForm.value).subscribe({
        next: (response: any) => {
          this.userAuthenticationService.userStateManagement = {
            token: response.token,
            isAuthorized: true,
            errorMessage: '',
            user: response.user,
          };
          this.userAuthenticationService.setUserStateManagement();
          this.userAuthenticationService.isUserLoggedIn$$.next(true);
          console.log(response.token);
        },
        error: (e) => {
          this.userAuthenticationService.userStateManagement = {
            token: '',
            isAuthorized: false,
            errorMessage: 'Error in logging the user',
          };
          this.userAuthenticationService.setUserStateManagement();
          this.userAuthenticationService.isUserLoggedIn$$.next(true);
        },
      });
    }
  }

  onRegisterSubmit(): void {
    if (this.signUpForm.invalid) {
      if (this.signUpForm.get('name')?.invalid) {
        this.signUpForm.get('name')?.markAsDirty();
      }
      if (this.signUpForm.get('email')?.invalid) {
        this.signUpForm.get('email')?.markAsDirty();
      }
      if (this.signUpForm.get('password')?.invalid) {
        this.signUpForm.get('password')?.markAsDirty();
      }
      return;
    } else {
      this.userAuthenticationService.register(this.signUpForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          if (response === 208) {
            alert('The entered email is already registered');
          } else if (response == 201) {
            this.toggleToOtherForm(
              'login',
              document.getElementById(
                'user-authentication-container'
              ) as HTMLElement
            );
          }
        },
        error: (e) => console.error(e),
      });
    }
  }
}
