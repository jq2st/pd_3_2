import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethThreeStep1Component } from './meth-three-step1.component';

describe('MethThreeStep1Component', () => {
  let component: MethThreeStep1Component;
  let fixture: ComponentFixture<MethThreeStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethThreeStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethThreeStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
