import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';


import {DashboardRoutingModule} from './dashboard-routing.module';
import {HomeComponent} from './home/home.component';
import {StatComponent} from './stat/stat.component';
import {TablesModule} from '../tables/tables.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    TablesModule
  ],
  declarations: [HomeComponent, StatComponent]
})
export class DashboardModule {}
