import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

import { bfyComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/bfy.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(bfyComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]).catch(err => console.error(err));
