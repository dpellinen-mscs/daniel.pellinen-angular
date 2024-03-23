import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampSubject1Component } from './samp-subject1.component';

describe('SampSubject1Component', () => {
  let component: SampSubject1Component;
  let fixture: ComponentFixture<SampSubject1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampSubject1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampSubject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
