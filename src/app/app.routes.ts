import { Routes } from '@angular/router';
import { MetricasComponent } from './components/metricas/metricas.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'tabla',
    component: MetricasComponent,
  },
  {
    path: '',
    component: AppComponent,
  }
];
