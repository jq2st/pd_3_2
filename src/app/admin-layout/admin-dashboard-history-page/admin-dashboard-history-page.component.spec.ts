import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardHistoryPageComponent } from './admin-dashboard-history-page.component';

describe('AdminDashboardHistoryPageComponent', () => {
  let component: AdminDashboardHistoryPageComponent;
  let fixture: ComponentFixture<AdminDashboardHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
