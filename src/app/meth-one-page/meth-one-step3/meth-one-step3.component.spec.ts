import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethOneStep3Component } from './meth-one-step3.component';

describe('MethOneStep3Component', () => {
  let component: MethOneStep3Component;
  let fixture: ComponentFixture<MethOneStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethOneStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethOneStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
