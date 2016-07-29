import { RouterConfig } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent }  from './book-details/book-details.component';

export const BooksRoutes: RouterConfig = [
  {
    path: 'categories',
    component: BooksComponent,
    children: [
      { path: ':categoryId/books', component: BooksListComponent },
    ]
  },
  {
    path: 'books/:bookId',
    component: BookDetailsComponent
  },
];
