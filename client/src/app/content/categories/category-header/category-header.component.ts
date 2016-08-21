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
  private isAdmin: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.authenticationService.getUserId()) {
      return;
    }
    
    this.authenticationService.checkIfAdmin().subscribe(
      (data) => {
        if (data == "Ok") {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      }
    );
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
