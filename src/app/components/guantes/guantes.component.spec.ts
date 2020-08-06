import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuantesComponent } from './guantes.component';

describe('GuantesComponent', () => {
  let component: GuantesComponent;
  let fixture: ComponentFixture<GuantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
