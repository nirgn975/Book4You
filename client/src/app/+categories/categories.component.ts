import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CategoryComponent } from './category/category.component';
import { CategoryService } from './shared/category.service';
import { Category } from './shared/category.model';

@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css'],
  directives: [CategoryComponent],
  providers: [CategoryService]
})

export class CategoriesComponent implements OnInit {
  categories: Observable<Category[]>;
  errorMessage: String;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = this.categoryService.getCategories();
  }
}
