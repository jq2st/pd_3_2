import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AdminHistoryItem } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-admin-dashboard-history-page',
  templateUrl: './admin-dashboard-history-page.component.html',
  styleUrls: ['./admin-dashboard-history-page.component.css']
})
export class AdminDashboardHistoryPageComponent implements OnInit {

  isLoading = true
  history: AdminHistoryItem[] = []
  displayedColumns: string[] = ['imageBefore', 'imageAfter', 'date', 'type', 'info']

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getHistory()
      .subscribe((history: AdminHistoryItem[]) => {
        this.history = history
        this.isLoading = false
      })
  }

}
