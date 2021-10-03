import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethFourStep2Component } from './meth-four-step2.component';

describe('MethFourStep2Component', () => {
  let component: MethFourStep2Component;
  let fixture: ComponentFixture<MethFourStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethFourStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethFourStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
