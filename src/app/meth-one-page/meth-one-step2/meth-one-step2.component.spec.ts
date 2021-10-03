import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethOneStep2Component } from './meth-one-step2.component';

describe('MethOneStep2Component', () => {
  let component: MethOneStep2Component;
  let fixture: ComponentFixture<MethOneStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethOneStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethOneStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
