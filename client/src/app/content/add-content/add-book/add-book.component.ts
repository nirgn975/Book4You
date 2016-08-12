import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { BookService } from '../../shared/book.service';
import { CategoryService } from '../../shared/category.service';
import { Utils } from '../shared/utils';

@Component({
  moduleId: module.id,
  selector: 'bfy-add-book',
  templateUrl: 'add-book.component.html',
  styleUrls: ['add-book.component.css'],
  providers: [CategoryService, BookService]
})
export class AddBookComponent {
  bookForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private bookService: BookService,
    private utils: Utils,
    fb: FormBuilder) {
      this.bookForm = fb.group({
            "title": ["", Validators.required],
            "author": ["", Validators.required],
            "description": ["", Validators.required],
            "price": ["", Validators.required],
            // "picture": ["", Validators.required],
            "category": ["", Validators.required]
        });
    }

  onSubmit(event) {
    event.preventDefault();

    let categoryId = this.utils.getCategoryId(this.bookForm['_value'].category);
    this.bookForm['_value'].category = 'categories/' + categoryId;
    this.bookService.addNewBook(this.bookForm['_value']).subscribe(
      data => this.utils.callback(data)
    );
  }
}
