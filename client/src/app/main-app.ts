import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Home} from 'home/home.component';
import {WishList} from 'wish-list/wish-list.component';

@Component({
    selector: 'main-app',
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/main-app.html',
    styleUrls: ['app/main-app.css'],
})
@RouteConfig([
    { path: '/home',            component: Home,            name: 'Home', useAsDefault: true },
    { path: '/wishlist',        component: WishList,        name: 'WishList' },
])
export class MainApp {

    constructor() {}

}