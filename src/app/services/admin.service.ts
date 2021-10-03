import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getHistory() {
    return this.http.get(`/api/admin/history`)
  }

  getQueries() {
    
  }

  getUsers() {
    return this.http.get(`/api/admin/users`)
  }
}
