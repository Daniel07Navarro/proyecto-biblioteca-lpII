import { TestBed } from '@angular/core/testing';

import { ClienteLoginService } from './cliente-login.service';

describe('ClienteLoginService', () => {
  let service: ClienteLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
