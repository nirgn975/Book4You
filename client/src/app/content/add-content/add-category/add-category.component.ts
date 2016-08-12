import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CategoryService } from '../../shared/category.service';
import { Category } from '../../shared/category.model';
import { Utils } from '../shared/utils';

@Component({
  moduleId: module.id,
  selector: 'bfy-add-category',
  templateUrl: 'add-category.component.html',
  styleUrls: ['add-category.component.css'],
  providers: [CategoryService]
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categories: Observable<Category[]>;
  content: string;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private utils: Utils,
    fb: FormBuilder) {
    this.categoryForm = fb.group({
          "name": ["", Validators.required]
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.content = params['content'];
    });
     this.categories = this.categoryService.getCategories();
  }

  onSubmit(event) {
    event.preventDefault();

    this.categoryService.addNewCategory(this.categoryForm['_value']).subscribe(
      data => this.utils.callback(data)
    );
  }

}
