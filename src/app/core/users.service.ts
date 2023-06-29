import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {IUser, IUserDetails} from './User/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly urlSuffix = "users"

  constructor(private http: HttpClient) {

   }
   get CreateUserUrl() {
    return `${environment.apiUrl}${this.urlSuffix}/createUser`;
  }
  get createSuperAdminUrl(){
    return `${environment.apiUrl}${this.urlSuffix}/createSuperUser`;
  }
  CreateSuperAdmin(user:IUser){
    return this.http.post(this.createSuperAdminUrl,user).pipe(map(res => res), catchError(err => throwError(err)) )
  }

  getAllUsers(){
    const users:IUserDetails[]=[
      {FirstName:"Birhan",LastName: "Nega",MiddleName:"Cheru",Roles:[]},
      {FirstName:"Abdulmenan",LastName: "Birhan",MiddleName:"Nega",Roles:[]},
      {FirstName:"Amira",LastName: "Birhan",MiddleName:"Nega",Roles:[]}
    ];
    
    this.http.get("https://localhost:7026/api/users/users").subscribe(response=>{
      console.log(response)
      
    })
    return users
  }
}
