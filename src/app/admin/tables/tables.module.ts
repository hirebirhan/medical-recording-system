import {MatToolbarModule} from '@angular/material/toolbar';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import {TablesRoutingModule} from './tables-routing.module';
import {BaseTableComponent} from './tables/baseTable.component';
import {DataService} from './data.service';

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [BaseTableComponent],
  exports:[BaseTableComponent],
  providers: [DataService]
})
export class TablesModule {}
