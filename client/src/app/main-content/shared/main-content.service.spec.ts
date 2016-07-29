/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MainContentService } from './main-content.service';

describe('Service: MainContent', () => {
  beforeEach(() => {
    addProviders([MainContentService]);
  });

  it('should ...',
    inject([MainContentService],
      (service: MainContentService) => {
        expect(service).toBeTruthy();
      }));
});
