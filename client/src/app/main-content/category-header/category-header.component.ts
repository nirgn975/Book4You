import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'bfy-category-header',
  templateUrl: 'category-header.component.html',
  styleUrls: ['category-header.component.css']
})

export class CategoryHeaderComponent {

  constructor(private router: Router) {}

  addCategory() {
    this.router.navigate(['/main-content/addCategory']);
  };

  addBook() {
    console.log('add book');
  };

  deleteCategory() {
    console.log('delete category');
  };

}
