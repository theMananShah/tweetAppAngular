import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Login } from '../model/login';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  base = environment.base;
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.base + "/tweets/users");
  }
  loginUser(user: Login) {
    return this.http.get(this.base + '/tweets/login?emailId=' + user.userId + "&password=" + user.password);
  }
  forgotPassword(user: Login) {
    return this.http.get(this.base + '/tweets/forgot?userName=' + user.userId + "&newPassword=" + user.password);
  }
  registserUser(user: Users) {
    return this.http.post<any>(this.base + "/tweets/register", user);
  }

}
