import { TestBed } from '@angular/core/testing';

import { BartService } from './bart.service';

describe('BartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BartService = TestBed.get(BartService);
    expect(service).toBeTruthy();
  });
});
