import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAuthenticationService } from './services/user-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss'],
})
export class UserAuthenticationComponent {
  signUpForm: FormGroup;
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userAuthenticationService: UserAuthenticationService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
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
      this.userAuthenticationService
        .postLoginDetais(this.signInForm.value)
        .subscribe((user) => {
          if (user) {
            this.router.navigate(['/dashboard']);
            console.log('User logged in successfully');
          } else {
            console.log('User not found');
          }
        }),
        (err: any) => {
          console.log('Error while logging in user', err);
        };
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
      this.userAuthenticationService
        .postRegisterDetails(this.signUpForm.value)
        .subscribe((user) => {
          console.log('User registered successfully');
        }),
        (err: any) => {
          console.log('Error while registering user', err);
        };
    }
  }
}
