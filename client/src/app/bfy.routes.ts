import { provideRouter, RouterConfig } from '@angular/router';

import { MainContentRoutes } from './main-content/main-content.routes';

export const routes: RouterConfig = [
  ...MainContentRoutes,
  {
    path: '',
    redirectTo: 'main-content/categories/1/books',
    terminal: true
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
