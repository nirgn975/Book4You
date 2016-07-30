import { Component } from '@angular/core';

import { CategoryService } from '../shared/category.service';

@Component({
  moduleId: module.id,
  selector: 'bfy-add-content',
  templateUrl: 'add-content.component.html',
  styleUrls: ['add-content.component.css'],
  providers: [CategoryService]
})
export class AddContentComponent {
  editName: string;

  constructor(
    private categoryService: CategoryService
  ) { }

  cancel() {
    console.log('cancel');
  }

  save() {
    let categoryName = this.editName;
    this.categoryService.addNewCategory(categoryName).subscribe();
  }

}
