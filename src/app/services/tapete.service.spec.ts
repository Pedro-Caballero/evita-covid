import { TestBed } from '@angular/core/testing';

import { TapeteService } from './tapete.service';

describe('TapeteService', () => {
  let service: TapeteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TapeteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
