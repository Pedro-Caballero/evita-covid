import { TestBed } from '@angular/core/testing';

import { GelService } from './gel.service';

describe('GelService', () => {
  let service: GelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
