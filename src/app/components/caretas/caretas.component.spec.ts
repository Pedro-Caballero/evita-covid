import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretasComponent } from './caretas.component';

describe('CaretasComponent', () => {
  let component: CaretasComponent;
  let fixture: ComponentFixture<CaretasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaretasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
