import { RouterConfig } from '@angular/router';

import { BooksComponent }  from '../+books/books.component';

export const CategoriesRoutes: RouterConfig = [
  { path: 'category/:categoryId', component: BooksComponent },
];
