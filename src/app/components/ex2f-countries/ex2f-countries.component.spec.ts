import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2fCountriesComponent } from './ex2f-countries.component';

describe('Ex2fCountriesComponent', () => {
  let component: Ex2fCountriesComponent;
  let fixture: ComponentFixture<Ex2fCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2fCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2fCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
