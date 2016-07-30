import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CategoriesComponent } from './categories';
import { CategoryHeaderComponent } from './categories/category-header';

@Component({
  moduleId: module.id,
  selector: 'bfy-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css'],
  directives: [ROUTER_DIRECTIVES, CategoriesComponent, CategoryHeaderComponent]
})
export class ContentComponent {

  constructor() { }

}
