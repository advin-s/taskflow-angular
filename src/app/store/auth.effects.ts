import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  login,
  loginFailed,
  loginSuccess,
  signup,
  signupFailed,
  signupSuccess,
} from './auth.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) =>
        this.authService.onLogin({ ...action }).pipe(
          tap((res) => {
            this.router.navigate(['/tasks']);
            localStorage.setItem('token', res.token);
          }),
          map((loginRes) => loginSuccess({ auth: loginRes })),
          catchError((error) => of(loginFailed(error)))
        )
      )
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signup),
      switchMap(({ signup }) =>
        this.authService.onSignup(signup).pipe(
          tap((res) => {
            this.router.navigate(['/tasks']);
            localStorage.setItem('token', res.token);
          }),
          map((res) => signupSuccess({ auth: res })),
          catchError((error) => of(signupFailed({ error })))
        )
      )
    )
  );
}
