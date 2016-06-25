import { provideRouter, RouterConfig } from '@angular/router';

import { CategoriesRoutes } from './+categories/categories.routes';
import { BooksRoutes } from './+books/books.routes';

export const routes: RouterConfig = [
  ...CategoriesRoutes,
  ...BooksRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
