import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardUsersPageComponent } from './admin-dashboard-users-page.component';

describe('AdminDashboardUsersPageComponent', () => {
  let component: AdminDashboardUsersPageComponent;
  let fixture: ComponentFixture<AdminDashboardUsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardUsersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
