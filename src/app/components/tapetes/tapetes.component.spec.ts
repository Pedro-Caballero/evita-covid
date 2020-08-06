import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapetesComponent } from './tapetes.component';

describe('TapetesComponent', () => {
  let component: TapetesComponent;
  let fixture: ComponentFixture<TapetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
