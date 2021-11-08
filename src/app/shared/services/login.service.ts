import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly baseUrl = 'http://localhost:8080/api/v1/authentication';
  // private readonly baseUrl = 'login';
  user: User = {user:'',password:0};
  authenticated = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  // authenticate(credentials: any, callback: any) {
  //   // const headers = new HttpHeaders(credentials ? {
  //   //   authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
  //   // } : {});
  //   // this.httpClient.get(this.baseUrl, {headers: headers}).subscribe(response => {
  //   //   if (response) {
  //   //     this.authenticated = true;
  //   //   } else {
  //   //     this.authenticated = false;
  //   //   }
  //   //   return callback && callback();
  //   // })

  // }

  getLogin(user: string, password: number): Observable<any> {
    this.user.user = user;
    this.user.password = password;
    return this.httpClient.post(`${this.baseUrl}`,this.user);
  }
}

// this.authenticate(this.user,() => {this.router.navigateByUrl('/list')});
// return of(this.user);
