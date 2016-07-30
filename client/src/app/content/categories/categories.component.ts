import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [CategoryService]
})
export class CategoriesComponent implements OnInit {
  categories: Observable<Category[]>;
  private selectedCategory: number;
  private sub: any;

  constructor(
    private router: Router,
    private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.selectedCategory = 1;
  }

  isSelected(category: Category) {
    return category.id === this.selectedCategory;
  }

  onSelect(category: Category) {
    let categoryBooks = category['_links'].books.href;
    let categoryUrl = categoryBooks.split("/").slice(-3).join("/");
    this.router.navigate(['/content/' + categoryUrl]);
  }
}
