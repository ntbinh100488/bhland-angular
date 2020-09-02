import { TestBed } from '@angular/core/testing';

import { BhCoreService } from './bh-core.service';

describe('BhCoreService', () => {
  let service: BhCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BhCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
