import { RouterConfig } from '@angular/router';

import { BookDetailsComponent }  from './book-details/book-details.component';
import { BooksComponent } from './books.component';

export const BooksRoutes: RouterConfig = [
  { path: 'category/:categoryId', component: BooksComponent },
  { path: 'category/:categoryId/book/:bookId', component: BookDetailsComponent },
];
