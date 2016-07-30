/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BookDetailsComponent } from './book-details.component';

describe('Component: BookDetails', () => {
  it('should create an instance', () => {
    let component = new BookDetailsComponent();
    expect(component).toBeTruthy();
  });
});
