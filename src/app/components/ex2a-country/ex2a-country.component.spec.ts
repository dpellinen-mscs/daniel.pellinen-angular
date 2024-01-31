import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2aCountryComponent } from './ex2a-country.component';

describe('Ex2aCountryComponent', () => {
  let component: Ex2aCountryComponent;
  let fixture: ComponentFixture<Ex2aCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2aCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2aCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
