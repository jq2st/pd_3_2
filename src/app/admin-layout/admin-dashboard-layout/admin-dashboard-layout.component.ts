import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-layout',
  templateUrl: './admin-dashboard-layout.component.html',
  styleUrls: ['./admin-dashboard-layout.component.css']
})
export class AdminDashboardLayoutComponent implements OnInit {

  links: any[] = [
    {route: '/admin/dashboard/queries', name: 'Проверка'},
    {route: '/admin/dashboard/history', name: 'История'},
    {route: '/admin/dashboard/users', name: 'Пользователи'}
  ]

  constructor() { }

  ngOnInit() {
  }
  

}
