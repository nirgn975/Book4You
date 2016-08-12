import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CategoryService } from '../../shared/category.service';
import { Utils } from '../shared/utils';

@Component({
  moduleId: module.id,
  selector: 'bfy-delete-category',
  templateUrl: 'delete-category.component.html',
  styleUrls: ['delete-category.component.css'],
  providers: [CategoryService]
})
export class DeleteCategoryComponent {
  delCategoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private utils: Utils,
    fb: FormBuilder) {}

  onSubmit(event) {
    event.preventDefault();

    let categoryId = this.utils.getCategoryId(this.delCategoryForm['_value'].category);
    this.categoryService.deleteCategory(categoryId).subscribe(
      data => this.utils.callback(data)
    );
  }

}
