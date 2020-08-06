import { TestBed } from '@angular/core/testing';

import { LentesService } from './lentes.service';

describe('LentesService', () => {
  let service: LentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
