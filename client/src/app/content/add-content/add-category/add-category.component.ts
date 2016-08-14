import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder,
  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { AuthenticationService } from '../../../shared/authentication.service';
import { CategoryService } from '../../shared/category.service';
import { Category } from '../../shared/category.model';
import { Utils } from '../shared/utils';

@Component({
  moduleId: module.id,
  selector: 'bfy-add-category',
  templateUrl: 'add-category.component.html',
  styleUrls: ['add-category.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [CategoryService, Utils, AuthenticationService]
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categories: Observable<Category[]>;

  constructor(
    private authenticationService: AuthenticationService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private utils: Utils,
    fb: FormBuilder
  ) {
    this.categoryForm = fb.group({
          "name": ["", Validators.required]
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

    this.categoryService.addNewCategory(options, this.categoryForm['_value']).subscribe(
      data => this.utils.callback(data)
    );
  }

}
