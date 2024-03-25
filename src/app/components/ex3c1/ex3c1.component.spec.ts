import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3c1Component } from './ex3c1.component';

describe('Ex3c1Component', () => {
  let component: Ex3c1Component;
  let fixture: ComponentFixture<Ex3c1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3c1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
