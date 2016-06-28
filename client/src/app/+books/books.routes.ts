import { RouterConfig } from '@angular/router';

import { BookDetailsComponent }  from './book-details/book-details.component';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';

export const BooksRoutes: RouterConfig = [
  { path: 'category/:categoryId', component: BooksListComponent },
  { path: 'category/:categoryId/book/:bookId', component: BookDetailsComponent },
];
