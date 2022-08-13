import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization/organization.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ItemsCategoryComponent } from './items-category/items-category.component';
import { PrefixesComponent } from './prefixes/prefixes.component';
import { LeaveComponent } from './leave/leave.component';
import { PaymentsComponent } from './payments/payments.component';
import { DesignationComponent } from './designation/designation.component';
import { ReferralComponent } from './referral/referral.component';
import { BedComponent } from './bed/bed.component';
import { ShiftComponent } from './shift/shift.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PetientComponent } from './petient/petient.component';



@NgModule({
  declarations: [
    OrganizationComponent,
    DepartmentComponent,
    UserComponent,
    RolesComponent,
    PermissionsComponent,
    ItemsCategoryComponent,
    PrefixesComponent,
    LeaveComponent,
    PaymentsComponent,
    DesignationComponent,
    ReferralComponent,
    BedComponent,
    ShiftComponent,
    PharmacyComponent,
    PetientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
