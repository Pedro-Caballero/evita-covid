import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenalizacionesComponent } from './senalizaciones.component';

describe('SenalizacionesComponent', () => {
  let component: SenalizacionesComponent;
  let fixture: ComponentFixture<SenalizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenalizacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenalizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
