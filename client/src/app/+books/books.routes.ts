import { RouterConfig } from '@angular/router';

import { BookDetailsComponent }  from './book-details/book-details.component';

export const BooksRoutes: RouterConfig = [
  { path: 'category/:categoryId/book/:bookId', component: BookDetailsComponent },
];
