import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Category } from '../shared/category.model';

@Component({
  moduleId: module.id,
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class CategoryComponent {
  @Input() category: Category;

  constructor() {}

}
