import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethFiveStep1Component } from './meth-five-step1.component';

describe('MethFiveStep1Component', () => {
  let component: MethFiveStep1Component;
  let fixture: ComponentFixture<MethFiveStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethFiveStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethFiveStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
