import { RouterConfig } from '@angular/router';

import { MainContentComponent } from './main-content.component';

import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookDetailsComponent }  from './books/book-details/book-details.component';

export const MainContentRoutes: RouterConfig = [
  {
    path: 'main-content',
    component: MainContentComponent,
    children: [
      {
        path: 'categories',
        component: BooksComponent,
        children: [
          {
            path: ':categoryId/books',
            component: BooksListComponent
          },
        ]
      },
      {
        path: 'books/:bookId',
        component: BookDetailsComponent
      }
    ]
  },
];
