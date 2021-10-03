import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethFiveStep3Component } from './meth-five-step3.component';

describe('MethFiveStep3Component', () => {
  let component: MethFiveStep3Component;
  let fixture: ComponentFixture<MethFiveStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethFiveStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethFiveStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
