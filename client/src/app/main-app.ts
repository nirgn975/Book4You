import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Home} from './components/home/home.component';
import {PrivacyPolicy} from './components/privacy-policy/privacy-policy.component';
import {TestYourself} from './components/test-yourself/test-yourself.component';
import {FacebookGames} from './components/facebook-games/facebook-games.component';

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
    { path: '/privacy-policy',  component: PrivacyPolicy,   name: 'PrivacyPolicy' },
    { path: '/test-yourself',   component: TestYourself,    name: 'TestYourself' },
    { path: '/facebook-games',  component: FacebookGames,   name: 'FacebookGames' },
])
export class MainApp {

    constructor() {}

}