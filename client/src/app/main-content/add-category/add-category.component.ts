import { Component } from '@angular/core';

import { MainContentService } from '../shared/main-content.service';

@Component({
  moduleId: module.id,
  selector: 'bfy-add-category',
  templateUrl: 'add-category.component.html',
  styleUrls: ['add-category.component.css'],
  providers: [MainContentService]
})

export class AddCategoryComponent {
  editName: string;

  constructor(
    private mainContentService: MainContentService
  ) { }

  cancel() {
    console.log('cencel');
  }

  save() {
    let categoryName = this.editName;
    this.mainContentService.addNewCategory(categoryName);
  }
}
