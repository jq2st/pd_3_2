import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckimgPageComponent } from './checkimg-page.component';

describe('CheckimgPageComponent', () => {
  let component: CheckimgPageComponent;
  let fixture: ComponentFixture<CheckimgPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckimgPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckimgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
