import { RouterConfig } from '@angular/router';

import { AddContentComponent } from './add-content.component';

import { AddBookComponent }  from './add-book/add-book.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';


export const AddContentRoutes: RouterConfig = [
  {
    path: 'addContent/addBook',
    component: AddBookComponent,
  },
  {
    path: 'addContent/addCategory',
    component: AddCategoryComponent
  },
  {
    path: 'addContent/deleteCategory',
    component: DeleteCategoryComponent
  },
];
