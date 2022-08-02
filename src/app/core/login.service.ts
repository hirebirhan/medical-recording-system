import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './User/IUser';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly urlSuffix = "users"


  constructor(private http: HttpClient) { }

  get loginUrl() {
    return `${environment.apiUrl}${this.urlSuffix}/login`;
  }

  login(user: any) {
    return this.http.post(this.loginUrl, user).pipe(map(res => res), catchError(err => throwError(err)) );
  }
  }

