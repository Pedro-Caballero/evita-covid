import { TestBed } from '@angular/core/testing';

import { CubrebocasService } from './cubrebocas.service';

describe('CubrebocasService', () => {
  let service: CubrebocasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubrebocasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
