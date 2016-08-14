import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../shared/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'bfy-category-header',
  templateUrl: 'category-header.component.html',
  styleUrls: ['category-header.component.css'],
  providers: [AuthenticationService]
})
export class CategoryHeaderComponent implements OnInit {
  haveAuth: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.haveAuth = this.authenticationService.checkAuth();
  }

  addCategory() {
    this.router.navigate(['/content/addContent/addCategory']);
  };

  addBook() {
    this.router.navigate(['/content/addContent/addBook']);
  };

  deleteCategory() {
    this.router.navigate(['/content/addContent/deleteCategory']);
  };
}
