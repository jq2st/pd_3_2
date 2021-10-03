import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethTwoStep2Component } from './meth-two-step2.component';

describe('MethTwoStep2Component', () => {
  let component: MethTwoStep2Component;
  let fixture: ComponentFixture<MethTwoStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethTwoStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethTwoStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
