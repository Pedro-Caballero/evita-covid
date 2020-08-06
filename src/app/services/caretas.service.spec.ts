import { TestBed } from '@angular/core/testing';

import { CaretasService } from './caretas.service';

describe('CaretasService', () => {
  let service: CaretasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaretasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
