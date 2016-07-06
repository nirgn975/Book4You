import { provideRouter, RouterConfig } from '@angular/router';

import { BooksRoutes } from './+books/books.routes';

export const routes: RouterConfig = [
  ...BooksRoutes,
  {
    path: '',
    redirectTo: '/category/1',
    terminal: true
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
