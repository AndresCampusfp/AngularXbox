import { TestBed } from '@angular/core/testing';

import { UsuarioServices } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
