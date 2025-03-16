import { CanActivateFn, CanMatchFn, Router, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectAuth } from './store/auth.selector';

export const authGuard: CanMatchFn = () => {
  const store$ = inject(Store);
  const router = inject(Router);

  return store$
    .select(selectAuth)
    .pipe(
      map((auth) => {
        console.log(auth);
        
        if (auth && auth.token) {
          return true;
        } else {
          router.navigate(['']);
          return false;
        }
      })
    );
};

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./tasks/tasks.component').then((c) => c.TasksComponent),
    canMatch: [authGuard],
  },
];
