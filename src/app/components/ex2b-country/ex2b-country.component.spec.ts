import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2bCountryComponent } from './ex2b-country.component';

describe('Ex2bCountryComponent', () => {
  let component: Ex2bCountryComponent;
  let fixture: ComponentFixture<Ex2bCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2bCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2bCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
