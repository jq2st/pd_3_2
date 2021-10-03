import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethFourStep1Component } from './meth-four-step1.component';

describe('MethFourStep1Component', () => {
  let component: MethFourStep1Component;
  let fixture: ComponentFixture<MethFourStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethFourStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethFourStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
