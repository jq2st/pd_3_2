import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethFivePageComponent } from './meth-five-page.component';

describe('MethFivePageComponent', () => {
  let component: MethFivePageComponent;
  let fixture: ComponentFixture<MethFivePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethFivePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethFivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
