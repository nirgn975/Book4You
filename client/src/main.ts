import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { BfyAppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(BfyAppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));
