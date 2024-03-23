import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3b2CountriesComponent  } from './ex3b2-countries.component';

describe('Ex3b2CountriesComponent', () => {
  let component: Ex3b2CountriesComponent;
  let fixture: ComponentFixture<Ex3b2CountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3b2CountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3b2CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
