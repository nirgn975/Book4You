import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, Validators, FormBuilder,
  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { AuthenticationService } from '../../../shared/authentication.service';
import { BookService } from '../../shared/book.service';
import { CategoryService } from '../../shared/category.service';
import { Category } from '../../shared/category.model';
import { Utils } from '../shared/utils';

@Component({
  moduleId: module.id,
  selector: 'bfy-add-book',
  templateUrl: 'add-book.component.html',
  styleUrls: ['add-book.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [CategoryService, BookService, Utils, AuthenticationService]
})
export class AddBookComponent {
  bookForm: FormGroup;
  categories: Observable<Category[]>;

  constructor(
    private authenticationService: AuthenticationService,
    private categoryService: CategoryService,
    private bookService: BookService,
    private utils: Utils,
    fb: FormBuilder
  ) {
      this.bookForm = fb.group({
          "title": ["", Validators.required],
          "author": ["", Validators.required],
          "description": ["", Validators.required],
          "price": ["", Validators.required],
          // "picture": ["", Validators.required],
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

    let categoryId = this.utils.getCategoryId(this.bookForm['_value'].category);
    this.bookForm['_value'].category = 'categories/' + categoryId;
    this.bookService.addNewBook(options, this.bookForm['_value']).subscribe(
      data => this.utils.callback(data)
    );
  }
}
