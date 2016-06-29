import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { MODAL_DIRECTVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap'

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  directives: [MODAL_DIRECTVES, CORE_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS],
})

export class NavComponent {

  constructor() {}

}
