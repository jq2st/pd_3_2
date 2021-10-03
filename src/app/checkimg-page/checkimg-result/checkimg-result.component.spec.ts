import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckimgResultComponent } from './checkimg-result.component';

describe('CheckimgResultComponent', () => {
  let component: CheckimgResultComponent;
  let fixture: ComponentFixture<CheckimgResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckimgResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckimgResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
