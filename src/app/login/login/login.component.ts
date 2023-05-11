import { IUser } from './../../core/User/IUser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/core/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  showError=false;
  constructor(private router: Router, 
    private formbuilder:FormBuilder,
    private _snackBar: MatSnackBar,
    private loginService:LoginService) {}

 
  onLogin() {
    const formData= this.loginForm.getRawValue();
    const user:IUser= {password:formData.password,username:formData.username}
    this.loginService.login(user).subscribe((result:any)=>{
      if(result){
         localStorage.setItem('isLoggedin', 'true');
         localStorage.setItem("username", user.username);
         localStorage.setItem('token', result.token)
         localStorage.setItem('expires', result.expiration)
         this._snackBar.open('Success!!', 'close', {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
         this.router.navigate(['admin/dashboard']);
      }else{
       this.showError=true;
       this._snackBar.open('Error!!', 'close', {
        horizontalPosition: "right",
        verticalPosition: "top",
      });

      }
      this.router.navigate(['admin/dashboard']);
    },err=>{
      this.showError=true;
      console.log("error",err)
    });
  }
}