import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CategoryHeaderComponent } from './category-header';
import { CategoriesComponent } from './categories';

@Component({
  moduleId: module.id,
  selector: 'bfy-main-content',
  templateUrl: 'main-content.component.html',
  styleUrls: ['main-content.component.css'],
  directives: [ROUTER_DIRECTIVES, CategoriesComponent, CategoryHeaderComponent]
})

export class MainContentComponent {

  constructor() { }

}
