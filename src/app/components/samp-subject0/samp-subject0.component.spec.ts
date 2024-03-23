import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampSubject0Component } from './samp-subject0.component';

describe('SampSubject0Component', () => {
  let component: SampSubject0Component;
  let fixture: ComponentFixture<SampSubject0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampSubject0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampSubject0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
