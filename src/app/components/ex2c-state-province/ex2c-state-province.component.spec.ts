import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2cStateProvinceComponent } from './ex2c-state-province.component';

describe('Ex2cStateProvinceComponent', () => {
  let component: Ex2cStateProvinceComponent;
  let fixture: ComponentFixture<Ex2cStateProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2cStateProvinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2cStateProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
