import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubrebocasComponent } from './cubrebocas.component';

describe('CubrebocasComponent', () => {
  let component: CubrebocasComponent;
  let fixture: ComponentFixture<CubrebocasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubrebocasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubrebocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
