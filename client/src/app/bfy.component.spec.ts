import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BfyAppComponent } from '../app/bfy.component';

beforeEachProviders(() => [BfyAppComponent]);

describe('App: Bfy', () => {
  it('should create the app',
      inject([BfyAppComponent], (app: BfyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bfy works!\'',
      inject([BfyAppComponent], (app: BfyAppComponent) => {
    expect(app.title).toEqual('bfy works!');
  }));
});
