import { TestBed } from '@angular/core/testing';

import { BhCommonService } from './bh-common.service';

describe('BhCommonService', () => {
  let service: BhCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BhCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
