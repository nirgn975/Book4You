/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BookService } from './book.service';

describe('Service: Book', () => {
  beforeEach(() => {
    addProviders([BookService]);
  });

  it('should ...',
    inject([BookService],
      (service: BookService) => {
        expect(service).toBeTruthy();
      }));
});
