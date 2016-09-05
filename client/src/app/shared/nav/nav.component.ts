import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder,
  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { CartService } from '../../cart/shared/cart.service';
import { NavService } from './nav.service';
import { Cart } from '../../cart/shared/cart.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [AuthenticationService, CartService, NavService]
})
export class NavComponent implements OnInit {
  private LoginIsVisible: boolean;
  private cart: Cart = new Cart();
  private haveAuth: boolean = false;
  private auth: string;
  private options: any;
  private userId: string;
  private user = {
    'email': '',
    'password': ''
  };
  private isAdmin: boolean = false;
  private modalStatus: String = 'signin';
  private newUserForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService,
    private navService: NavService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.newUserForm = fb.group({
        "username": ["", Validators.required],
        "password": ["", Validators.required],
        "firstName": ["", Validators.required],
        "lastName": ["", Validators.required]
    });
  }

  ngOnInit() {
    this.auth = this.authenticationService.getAuth();
    this.options = this.authenticationService.getOptions(this.auth);
    this.userId = this.authenticationService.getUserId();
    this.haveAuth = this.authenticationService.checkAuth();

    // Get cart details only of login.
    if (this.haveAuth) {
      this.cartService.getCart(this.options, this.userId).subscribe(
        (data) => this.cart = data
      );
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

  showLogin() {
    this.LoginIsVisible = true;
  }

  hideLogin() {
    this.LoginIsVisible = false;
  }

  login() {
    this.authenticationService.login(this.user.email, this.user.password).subscribe(
      (data) => data.ok ? location.reload() : alert("Something went wrong, please try again.")
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
    location.reload();
  }

  toWishlist() {
    this.router.navigate(['/wishlist']);
  }

  toCart() {
    this.router.navigate(['/cart']);
  }

  toRoot() {
    this.router.navigate(['']);
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

  registerNewUser() {
    this.modalStatus = 'register';
  }

  onSubmit(event) {
    event.preventDefault();
    this.newUserForm['_value'].rols = ["ROLE_USER", "ROLE_ADMIN"]
    this.navService.addNewUser(this.options, this.newUserForm['_value']).subscribe(
      (data) => (data.ok) ? location.reload() : ''
    );
  }
}
