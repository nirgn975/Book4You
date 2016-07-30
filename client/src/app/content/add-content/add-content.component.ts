import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder,
  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { CategoryService } from '../shared/category.service';
import { BookService } from '../shared/book.service';
import { Category } from '../shared/category.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-add-content',
  templateUrl: 'add-content.component.html',
  styleUrls: ['add-content.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [CategoryService, BookService]
})
export class AddContentComponent implements OnInit {
  categories: Observable<Category[]>;
  content: string;
  private sub: any;
  bookForm: FormGroup;
  categoryForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private bookService: BookService,
    private router: Router,
    fb: FormBuilder) {
      this.bookForm = fb.group({
            "title": ["", Validators.required],
            "author": ["", Validators.required],
            "description": ["", Validators.required],
            "price": ["", Validators.required],
            // "picture": ["", Validators.required],
            "category": ["", Validators.required]
        });
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

    if (this.content == "book") {
      let categoryId = this.bookForm['_value'].category.split("/").slice(-1)[0];
      this.bookForm['_value'].category = 'categories/' + categoryId;
      this.bookService.addNewBook(this.bookForm['_value']).subscribe();
    } else {
      this.categoryService.addNewCategory(this.categoryForm['_value']).subscribe();
    }
  }
}
