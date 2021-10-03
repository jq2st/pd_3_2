import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-dashboard-users-page',
  templateUrl: './admin-dashboard-users-page.component.html',
  styleUrls: ['./admin-dashboard-users-page.component.css']
})
export class AdminDashboardUsersPageComponent implements OnInit {
  isLoading = true
  users: any[] = []
  displayedColumns: string[] = ['login', 'role']

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getUsers()
      .subscribe((users: any[]) => {
        this.users = users
        this.isLoading = false
      })
  }

}
