import { RouterConfig } from '@angular/router';

import { BookDetailsComponent }  from './book-details/book-details.component';

export const BooksRoutes: RouterConfig = [
  { path: 'book/:id', component: BookDetailsComponent },
];
