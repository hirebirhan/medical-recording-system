import { IUser } from './../../core/User/IUser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  loginForm:FormGroup= this.formbuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private router: Router, 
    private formbuilder:FormBuilder,
    private loginService:LoginService) {}

 
  onLogin() {
    const formData= this.loginForm.getRawValue();
    const user:IUser= {password:formData.password,username:formData.username}
    this.loginService.login(user).subscribe((result:any)=>{
      console.log("result",result)
      if(result){
         localStorage.setItem('isLoggedin', 'true');
         localStorage.setItem("username", user.username);
         localStorage.setItem('token', result.token)
         localStorage.setItem('expires', result.expiration)
         this.router.navigate(['admin/dashboard']);
      }
    },err=>{
      console.log("error",err)
    });
  }
}