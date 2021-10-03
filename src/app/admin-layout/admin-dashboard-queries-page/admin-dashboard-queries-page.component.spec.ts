import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardQueriesPageComponent } from './admin-dashboard-queries-page.component';

describe('AdminDashboardQueriesPageComponent', () => {
  let component: AdminDashboardQueriesPageComponent;
  let fixture: ComponentFixture<AdminDashboardQueriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardQueriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardQueriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
