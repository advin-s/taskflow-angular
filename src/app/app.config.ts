import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { authReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore({auth:authReducer}), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideEffects([AuthEffects]), provideHttpClient(withFetch())]
};
