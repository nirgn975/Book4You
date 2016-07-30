import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavComponent } from './shared/nav';

@Component({
  moduleId: module.id,
  host: { id: 'bfy' },
  selector: 'bfy-root',
  templateUrl: 'bfy.component.html',
  styleUrls: ['bfy.component.css'],
  directives: [ROUTER_DIRECTIVES, NavComponent]
})
export class bfyComponent {}
