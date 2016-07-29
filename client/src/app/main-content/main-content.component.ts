import { Component } from '@angular/core';

import { CategoriesComponent } from './categories';
import { BooksComponent } from './books';

@Component({
  moduleId: module.id,
  selector: 'bfy-main-content',
  templateUrl: 'main-content.component.html',
  styleUrls: ['main-content.component.css'],
  directives: [CategoriesComponent, BooksComponent]
})

export class MainContentComponent {

  constructor() { }

}
