import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseTableComponent } from './tables/baseTable.component';

const routes: Routes = [
  {
    path: '',
    component: BaseTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}
