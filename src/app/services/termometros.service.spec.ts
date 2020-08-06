import { TestBed } from '@angular/core/testing';

import { TermometrosService } from './termometros.service';

describe('TermometrosService', () => {
  let service: TermometrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermometrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
