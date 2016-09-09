/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BeltsService } from './belts.service';

describe('Service: Belts', () => {
  beforeEach(() => {
    addProviders([BeltsService]);
  });

  it('should ...',
    inject([BeltsService],
      (service: BeltsService) => {
        expect(service).toBeTruthy();
      }));
});
