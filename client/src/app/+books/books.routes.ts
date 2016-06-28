import { RouterConfig } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent }  from './book-details/book-details.component';

export const BooksRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/category/1',
    terminal: true
  },
  { path: 'category/:categoryId', component: BooksListComponent },
  { path: 'category/:categoryId/book/:bookId', component: BookDetailsComponent },

  // {
  //   path: 'category',
  //   component: BooksComponent,
  //   children: [
  //     { path: '/:categoryId', component: BooksListComponent },
  //     { path: '/:categoryId/book/:bookId', component: BookDetailsComponent },
  //   ]
  // }
];
