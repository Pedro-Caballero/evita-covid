import { TestBed } from '@angular/core/testing';

import { GuantesService } from './guantes.service';

describe('GuantesService', () => {
  let service: GuantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
