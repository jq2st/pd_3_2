import { TestBed } from '@angular/core/testing';

import { MethTwoDataService } from './meth-two-data.service';

describe('MethTwoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MethTwoDataService = TestBed.get(MethTwoDataService);
    expect(service).toBeTruthy();
  });
});
