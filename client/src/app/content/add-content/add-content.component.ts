import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-add-content',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['add-content.component.css'],
  providers: [CategoryService]
})
export class AddContentComponent implements OnInit {
  categories: Observable<Category[]>;
  content: string;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.content = params['content'];
    });
     this.categories = this.categoryService.getCategories();
  }
}
