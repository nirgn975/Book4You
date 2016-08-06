import { RouterConfig } from '@angular/router';

import { ContentComponent } from './content.component';

import { BookComponent } from './book-list/book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent }  from './book-details/book-details.component';

export const ContentRoutes: RouterConfig = [
  {
    path: 'content',
    component: ContentComponent,
    children: [
      {
        path: 'categories/:categoryId/books',
        component: BookListComponent,
      },
      {
        path: 'books/:bookId',
        component: BookDetailsComponent
      },
    ]
  },
];
