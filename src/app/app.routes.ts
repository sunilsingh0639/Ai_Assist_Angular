import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard')
        .then(m => m.Dashboard)
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./pages/signals/signals')
        .then(m => m.Signals)
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./pages/news-analysis/news-analysis')
        .then(m => m.NewsAnalysis)
  }
];
