import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2dCountriesComponent } from './ex2d-countries.component';

describe('Ex2dCountriesComponent', () => {
  let component: Ex2dCountriesComponent;
  let fixture: ComponentFixture<Ex2dCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2dCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2dCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
