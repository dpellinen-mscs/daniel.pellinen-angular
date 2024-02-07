import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dpellinen2aTodoComponent } from './dpellinen2a-todo.component';

describe('Dpellinen2aTodoComponent', () => {
  let component: Dpellinen2aTodoComponent;
  let fixture: ComponentFixture<Dpellinen2aTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dpellinen2aTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dpellinen2aTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
