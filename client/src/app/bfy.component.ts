import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MainContentComponent } from './main-content';
import { NavComponent } from './shared/nav';

@Component({
  moduleId: module.id,
  host: {
    id: 'bfy'
  },
  selector: 'bfy-app',
  templateUrl: 'bfy.component.html',
  styleUrls: ['bfy.component.css'],
  directives: [ROUTER_DIRECTIVES, NavComponent, MainContentComponent]
})

export class BfyAppComponent {
}
