import { TestBed } from '@angular/core/testing';

import { MethThreeDataService } from './meth-three-data.service';

describe('MethThreeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MethThreeDataService = TestBed.get(MethThreeDataService);
    expect(service).toBeTruthy();
  });
});
