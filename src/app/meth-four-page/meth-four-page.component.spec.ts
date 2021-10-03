import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethFourPageComponent } from './meth-four-page.component';

describe('MethFourPageComponent', () => {
  let component: MethFourPageComponent;
  let fixture: ComponentFixture<MethFourPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethFourPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethFourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
