import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3aCountriesComponent } from './ex3a-countries.component';

describe('Ex3aCountriesComponent', () => {
  let component: Ex3aCountriesComponent;
  let fixture: ComponentFixture<Ex3aCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3aCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3aCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
