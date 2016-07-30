/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';

describe('Component: BookList', () => {
  it('should create an instance', () => {
    let component = new BookListComponent();
    expect(component).toBeTruthy();
  });
});
