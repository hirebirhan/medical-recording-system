import { LoginService } from './../core/login.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),MatSnackBarModule],
  exports: [RouterModule],
  providers:[LoginService]
})
export class LoginRoutingModule {}
