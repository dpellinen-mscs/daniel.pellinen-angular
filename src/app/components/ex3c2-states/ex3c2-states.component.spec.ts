import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3c2StatesComponent } from './ex3c2-states.component';

describe('Ex3c2StatesComponent', () => {
  let component: Ex3c2StatesComponent;
  let fixture: ComponentFixture<Ex3c2StatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3c2StatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3c2StatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
