import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3b1RegionsComponent } from './ex3b1-regions.component';

describe('Ex3bRegionsComponent', () => {
  let component: Ex3b1RegionsComponent;
  let fixture: ComponentFixture<Ex3b1RegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3b1RegionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3b1RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
