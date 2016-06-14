import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { BookService } from './book.service';

describe('Book Service', () => {
  beforeEachProviders(() => [BookService]);

  it('should ...',
      inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));
});
