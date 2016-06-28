/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CategoryService } from './category.service';

describe('Category Service', () => {
  beforeEachProviders(() => [CategoryService]);

  it('should ...',
      inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));
});
