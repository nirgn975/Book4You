import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder,
  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { CategoryService } from '../../shared/category.service';
import { Category } from '../../shared/category.model';
import { Utils } from '../shared/utils';

@Component({
  moduleId: module.id,
  selector: 'bfy-delete-category',
  templateUrl: 'delete-category.component.html',
  styleUrls: ['delete-category.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [CategoryService, Utils]
})
export class DeleteCategoryComponent implements OnInit {
  delCategoryForm: FormGroup;
  categories: Observable<Category[]>;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private utils: Utils,
    fb: FormBuilder) {
      this.delCategoryForm = fb.group({
            "category": ["", Validators.required]
        });
    }

  ngOnInit() {
     this.categories = this.categoryService.getCategories();
  }

  onSubmit(event) {
    event.preventDefault();

    let categoryId = this.utils.getCategoryId(this.delCategoryForm['_value'].category);
    this.categoryService.deleteCategory(categoryId).subscribe(
      data => this.utils.callback(data)
    );
  }
}
