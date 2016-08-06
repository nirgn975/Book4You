import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bfy-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavComponent {
  private LoginIsVisible: boolean;
  private user = {
    'email': '',
    'password': ''
  };

  constructor() {}

  showLogin() {
    this.LoginIsVisible = true;
  }

  hideLogin() {
    this.LoginIsVisible = false;
  }

  login() {
    console.log(this.user.email);
    console.log(this.user.password);
  }

}
