import { Component } from '@angular/core';
import { CategoriesComponent } from './+categories';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { BooksComponent } from './+books';

@Component({
  moduleId: module.id,
  selector: 'bfy-app',
  templateUrl: 'bfy.component.html',
  styleUrls: ['bfy.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/categories', component: CategoriesComponent},
  {path: '/books', component: BooksComponent}
])
export class BfyAppComponent {
  title = 'bfy works!';
}
