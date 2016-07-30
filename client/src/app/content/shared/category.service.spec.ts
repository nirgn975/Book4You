/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CategoryService } from './category.service';

describe('Service: Category', () => {
  beforeEach(() => {
    addProviders([CategoryService]);
  });

  it('should ...',
    inject([CategoryService],
      (service: CategoryService) => {
        expect(service).toBeTruthy();
      }));
});
