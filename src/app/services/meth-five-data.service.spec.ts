import { TestBed } from '@angular/core/testing';

import { MethFiveDataService } from './meth-five-data.service';

describe('MethFiveDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MethFiveDataService = TestBed.get(MethFiveDataService);
    expect(service).toBeTruthy();
  });
});
