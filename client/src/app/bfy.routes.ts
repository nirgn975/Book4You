import { provideRouter, RouterConfig } from '@angular/router';

import { ContentRoutes } from './content/content.routes';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: RouterConfig = [
  ...ContentRoutes,
  {
    path: '',
    redirectTo: 'content/categories/1/books',
    terminal: true
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
