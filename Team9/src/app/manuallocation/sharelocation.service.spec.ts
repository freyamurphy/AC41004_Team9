import { TestBed } from '@angular/core/testing';

import { SharelocationService } from './sharelocation.service';

describe('SharelocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharelocationService = TestBed.get(SharelocationService);
    expect(service).toBeTruthy();
  });
});
