import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethTwoStep3Component } from './meth-two-step3.component';

describe('MethTwoStep3Component', () => {
  let component: MethTwoStep3Component;
  let fixture: ComponentFixture<MethTwoStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethTwoStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethTwoStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
