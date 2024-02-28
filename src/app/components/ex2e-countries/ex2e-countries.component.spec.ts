import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2eCountriesComponent } from './ex2e-countries.component';

describe('Ex2eCountriesComponent', () => {
  let component: Ex2eCountriesComponent;
  let fixture: ComponentFixture<Ex2eCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2eCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2eCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
