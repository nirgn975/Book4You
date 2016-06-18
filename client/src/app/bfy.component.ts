import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { CategoriesComponent } from './+categories';
import { BooksComponent } from './+books';

@Component({
  moduleId: module.id,
  host: {
    id: 'bfy'
  },
  selector: 'bfy-app',
  templateUrl: 'bfy.component.html',
  styleUrls: ['bfy.component.css'],
  directives: [ROUTER_DIRECTIVES, CategoriesComponent, BooksComponent],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
])

export class BfyAppComponent {
  title = 'bfy works!';
}
