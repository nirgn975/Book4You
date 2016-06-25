import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CategoriesComponent } from './+categories';
import { BooksComponent } from './+books';
import { NavComponent } from './shared/nav';

@Component({
  moduleId: module.id,
  host: {
    id: 'bfy'
  },
  selector: 'bfy-app',
  templateUrl: 'bfy.component.html',
  styleUrls: ['bfy.component.css'],
  directives: [ROUTER_DIRECTIVES, NavComponent, CategoriesComponent, BooksComponent]
})

export class BfyAppComponent {
  title = 'bfy works!';
}
