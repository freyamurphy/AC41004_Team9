import { TestBed } from '@angular/core/testing';

import { RangesliderService } from './rangeslider.service';

describe('RangesliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RangesliderService = TestBed.get(RangesliderService);
    expect(service).toBeTruthy();
  });
});
