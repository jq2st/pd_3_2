import { TestBed } from '@angular/core/testing';

import { MethFourDataService } from './meth-four-data.service';

describe('MethFourDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MethFourDataService = TestBed.get(MethFourDataService);
    expect(service).toBeTruthy();
  });
});
