import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'input-output',
    loadComponent: () =>
      import('./pages/father-components/father-components.component').then(
        (c) => c.FatherComponentsComponent
      ),
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./pages/signals/signals.component').then(
        (c) => c.SignalsComponent
      ),
  },
  {
    path: 'number-formater',
    loadComponent: () =>
      import('./pages/number-formatter/number-formatter.component').then(
        (c) => c.NumberFormatterComponent
      ),
  },
];
