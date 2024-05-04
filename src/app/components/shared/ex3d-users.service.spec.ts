import { TestBed } from '@angular/core/testing';

import { Ex3dUsersService } from '../../shared/ex3d-users.service';

describe('Ex3dUsersService', () => {
  let service: Ex3dUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex3dUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
