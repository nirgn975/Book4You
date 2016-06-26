import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { CategoryService } from './shared/category.service';
import { Category } from './shared/category.model';

@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [CategoryService]
})

export class CategoriesComponent implements OnInit {
  categories: Observable<Category[]>;

  private selectedCategory: number = 1;
  private sub: any;

  constructor(
    private router: Router,
    private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  isSelected(category: Category) {
    return category.id === this.selectedCategory;
  }

  onSelect(categoryId: number) {
    this.selectedCategory = categoryId;
    this.router.navigate(['/category', categoryId]);
  }
}
