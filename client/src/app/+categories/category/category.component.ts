import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../shared/category.model';

@Component({
  moduleId: module.id,
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css']
})

export class CategoryComponent implements OnInit {
  @Input() category: Category;

  constructor() {}

  ngOnInit() {
  }

}
