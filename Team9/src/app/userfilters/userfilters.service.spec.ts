import { TestBed } from '@angular/core/testing';

import { UserfiltersService } from './userfilters.service';

describe('UserfiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserfiltersService = TestBed.get(UserfiltersService);
    expect(service).toBeTruthy();
  });
});
