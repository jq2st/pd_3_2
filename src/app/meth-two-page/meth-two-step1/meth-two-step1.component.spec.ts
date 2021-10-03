import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethTwoStep1Component } from './meth-two-step1.component';

describe('MethTwoStep1Component', () => {
  let component: MethTwoStep1Component;
  let fixture: ComponentFixture<MethTwoStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethTwoStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethTwoStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
