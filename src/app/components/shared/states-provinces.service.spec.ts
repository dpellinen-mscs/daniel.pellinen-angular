import { TestBed } from '@angular/core/testing';

import { StatesProvincesService } from './states-provinces.service';

describe('StatesProvincesService', () => {
  let service: StatesProvincesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatesProvincesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
