import { TestBed } from '@angular/core/testing';

import { SubregionsService } from './subregions.service';

describe('SubregionsService', () => {
  let service: SubregionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubregionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
