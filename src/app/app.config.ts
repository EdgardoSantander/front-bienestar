import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config'
import Aura from '@primeng/themes/nora';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
     provideHttpClient(),
     provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
      provideClientHydration(withEventReplay()),
      provideAnimationsAsync(),
      providePrimeNG({
        theme:{
          preset: Aura
        }
      })
    ]
};
