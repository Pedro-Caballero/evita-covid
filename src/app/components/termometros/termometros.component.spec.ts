import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermometrosComponent } from './termometros.component';

describe('TermometrosComponent', () => {
  let component: TermometrosComponent;
  let fixture: ComponentFixture<TermometrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermometrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermometrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
