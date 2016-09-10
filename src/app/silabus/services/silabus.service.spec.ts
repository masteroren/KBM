/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SilabusService } from './silabus.service';

describe('Service: Silabus', () => {
  beforeEach(() => {
    addProviders([SilabusService]);
  });

  it('should ...',
    inject([SilabusService],
      (service: SilabusService) => {
        expect(service).toBeTruthy();
      }));
});
