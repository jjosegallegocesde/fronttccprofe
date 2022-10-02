import { TestBed } from '@angular/core/testing';

import { ServiciomercanciaService } from './serviciomercancia.service';

describe('ServiciomercanciaService', () => {
  let service: ServiciomercanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciomercanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
