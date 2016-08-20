import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder,
  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { AuthenticationService } from '../../../shared/authentication.service';
import { CategoryService } from '../../shared/category.service';
import { CategoriesComponent } from '../../categories/categories.component';
import { Category } from '../../shared/category.model';
import { Utils } from '../shared/utils';

@Component({
  moduleId: module.id,
  selector: 'bfy-delete-category',
  templateUrl: 'delete-category.component.html',
  styleUrls: ['delete-category.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [CategoryService, Utils, AuthenticationService]
})
export class DeleteCategoryComponent implements OnInit {
  private delCategoryForm: FormGroup;
  private categories: Observable<Category[]>;

  constructor(
    private authenticationService: AuthenticationService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private utils: Utils,
    fb: FormBuilder
  ) {
      this.delCategoryForm = fb.group({
            "category": ["", Validators.required]
        });
    }

  ngOnInit() {
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);

     this.categories = this.categoryService.getCategories(options);
  }

  onSubmit(event) {
    event.preventDefault();
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);


    let categoryId = this.utils.getCategoryId(this.delCategoryForm['_value'].category);
    this.categoryService.deleteCategory(categoryId).subscribe(
      (data) => this.utils.callback(data)
    );
  }
}
