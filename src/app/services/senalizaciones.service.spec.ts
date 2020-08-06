import { TestBed } from '@angular/core/testing';

import { SenalizacionesService } from './senalizaciones.service';

describe('SenalizacionesService', () => {
  let service: SenalizacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenalizacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
