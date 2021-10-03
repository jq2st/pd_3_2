import { TestBed } from '@angular/core/testing';

import { MethOneDataService } from './meth-one-data.service';

describe('MethOneDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MethOneDataService = TestBed.get(MethOneDataService);
    expect(service).toBeTruthy();
  });
});
