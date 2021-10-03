import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-queries-page',
  templateUrl: './admin-dashboard-queries-page.component.html',
  styleUrls: ['./admin-dashboard-queries-page.component.css']
})
export class AdminDashboardQueriesPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']
  dataSource = [
    {position: 1, imageUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg', date: '2021-04-13T23:53:47.000+00:00', result: 'H'},

  ]

  constructor() { }

  ngOnInit() {
  }

}
