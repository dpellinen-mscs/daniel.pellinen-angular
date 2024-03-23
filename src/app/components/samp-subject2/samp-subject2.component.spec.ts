import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampSubject2Component } from './samp-subject2.component';

describe('SampSubject2Component', () => {
  let component: SampSubject2Component;
  let fixture: ComponentFixture<SampSubject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampSubject2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampSubject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
