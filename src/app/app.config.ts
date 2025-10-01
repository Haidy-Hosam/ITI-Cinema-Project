import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(NgCircleProgressModule.forRoot({
      radius: 25,
      outerStrokeWidth: 4,
      outerStrokeColor: "#21d07a",
      innerStrokeWidth: 0,
      showSubtitle: false,
      showUnits: false,
      titleFontSize: "14"
    }))
  ]
};
