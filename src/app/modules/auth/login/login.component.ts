import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';
import { Router } from '@angular/router';
import { tap, withLatestFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  private alert = inject(AlertService);
  private authService = inject(AuthService);
  private localStorageService = inject(LocalStorageService);
  private router = inject(Router);
  private fb = inject(NonNullableFormBuilder);

  // Login form
  loginForm = this.fb.group({
    uname: new FormControl('kminchelle', { nonNullable: true }),
    password: new FormControl('0lelplR', { nonNullable: true }),
  });

  /**
   * Submits the login information
   */
  async doLogin(): Promise<void> {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.authService
        .login(
          this.loginForm.get('uname')?.value as string,
          this.loginForm.get('password')?.value as string
        )
        .pipe(
          withLatestFrom(this.localStorageService.authorizationScope$),
          tap(([result]) => {
            if (result.success) {
              void this.alert.defaultErrorMessage(result.message);
              this.authService.setSidebar(true); // if login credentials are true then display sidebar
              this.router.navigate(['/dashboard']);
            } else {
              void this.alert.defaultErrorMessage(
                result.message,
                'Problem occrured!!!'
              );
              this.authService.setSidebar(false); // if login credentials are false then display sidebar
            }
          })
        )
        .subscribe();
    }
  }
}
