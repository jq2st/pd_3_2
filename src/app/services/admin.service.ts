import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  _serverUrl = 'https://pd-markerovka2-nest.herokuapp.com'

  constructor(private http: HttpClient) { }

  getHistory() {
    return this.http.get(`${this._serverUrl}/admin/history`)
  }

  getQueries() {
    
  }

  getUsers() {
    return this.http.get(`${this._serverUrl}/admin/users`)
  }
}
