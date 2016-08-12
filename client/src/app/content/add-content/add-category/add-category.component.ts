import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CategoryService } from '../../shared/category.service';
import { Utils } from '../shared/utils';

@Component({
  moduleId: module.id,
  selector: 'bfy-add-category',
  templateUrl: 'add-category.component.html',
  styleUrls: ['add-category.component.css'],
  providers: [CategoryService]
})
export class AddCategoryComponent {
  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private utils: Utils,
    fb: FormBuilder) {
    this.categoryForm = fb.group({
          "name": ["", Validators.required]
      });
  }

  onSubmit(event) {
    event.preventDefault();

    this.categoryService.addNewCategory(this.categoryForm['_value']).subscribe(
      data => this.utils.callback(data)
    );
  }

}
