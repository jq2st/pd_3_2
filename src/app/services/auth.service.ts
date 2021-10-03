import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null
  private _serverUrl = 'https://pd-markerovka2-nest.herokuapp.com'

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post<{token}>(this._serverUrl + '/auth/login', user)
      .pipe(
        tap(({token}) => {
          localStorage.setItem('auth-token', token)
          this.setToken(token)
        })
      )
  }

  setToken(token) {
    this.token = token
  }

  getToken() {
    return this.token
    return 'token'
  }

  isAuth() {
    return !!this.token
    return true
  }

  logout() {
    this.setToken(null)
    localStorage.clear()
  }

  reg(user) {
    return this.http.post(this._serverUrl + '/auth/sign_up', user)
  }

}
