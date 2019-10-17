import { TestBed } from '@angular/core/testing';

import { CriptografiaService } from './criptografia.service';

describe('CriptografiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriptografiaService = TestBed.get(CriptografiaService);
    expect(service).toBeTruthy();
  });
});
