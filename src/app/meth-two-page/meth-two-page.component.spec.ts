import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethTwoPageComponent } from './meth-two-page.component';

describe('MethTwoPageComponent', () => {
  let component: MethTwoPageComponent;
  let fixture: ComponentFixture<MethTwoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethTwoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
