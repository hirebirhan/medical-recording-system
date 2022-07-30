import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterTabsDirective } from './router-tab/router-tabs.directive';
import { RouterTabDirective } from './router-tab/router-tab.directive';

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  declarations: [PageNotFoundComponent, RouterTabsDirective, RouterTabDirective],
  exports: [
    CommonModule,
    FlexLayoutModule,
    PageNotFoundComponent,
    RouterTabsDirective,
    RouterTabDirective
  ]
})
export class SharedModule {}
