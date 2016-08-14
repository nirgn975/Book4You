import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { AuthenticationService } from '../../shared/authentication.service';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [CategoryService, AuthenticationService]
})
export class CategoriesComponent implements OnInit {
  categories: Observable<Category[]>;
  private selectedCategory: number;
  private sub: any;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // Get options with auth, to get the categories.
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);
    this.categories = this.categoryService.getCategories(options);

    // Get the current category from the current url.
    this.selectedCategory = +this.router.url.split("/").slice(-2)[0];
  }

  isSelected(category: Category) {
    let categoryId = category['_links'].self.href.split("/").slice(-1);
    return +categoryId === this.selectedCategory;
  }

  onSelect(category: Category) {
    let categoryBooks = category['_links'].books.href;
    let categoryUrl = categoryBooks.split("/").slice(-3).join("/");
    this.selectedCategory = +categoryBooks.split("/").slice(-2)[0];

    this.router.navigate(['/content/' + categoryUrl]);
  }
}
