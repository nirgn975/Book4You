/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { bfyComponent } from './bfy.component';

describe('App: Bfy', () => {
  beforeEach(() => {
    addProviders([bfyComponent]);
  });

  it('should create the app',
    inject([bfyComponent], (app: bfyComponent) => {
      expect(app).toBeTruthy();
    }));
});
