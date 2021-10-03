import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethOneStep1Component } from './meth-one-step1.component';

describe('MethOneStep1Component', () => {
  let component: MethOneStep1Component;
  let fixture: ComponentFixture<MethOneStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethOneStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethOneStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
