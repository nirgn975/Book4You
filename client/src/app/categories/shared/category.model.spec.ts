/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Category} from './category.model';

describe('Category', () => {
  it('should create an instance', () => {
    expect(new Category()).toBeTruthy();
  });
});
