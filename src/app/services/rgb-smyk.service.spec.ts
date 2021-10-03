import { TestBed } from '@angular/core/testing';

import { RgbSmykService } from './rgb-smyk.service';

describe('RgbSmykService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgbSmykService = TestBed.get(RgbSmykService);
    expect(service).toBeTruthy();
  });
});
