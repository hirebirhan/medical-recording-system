import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ListComponent} from './shared/components/list/list.component';
import {DropDownComponent} from './shared/components/drop-down/drop-down.component';
import {FormComponent} from './shared/components/form/form.component';
import {BaseTableComponentComponent} from './shared/components/base-table-component/base-table-component.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    ListComponent,
    DropDownComponent,
    FormComponent,
    BaseTableComponentComponent
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    core: CoreModule
  ) {
    if (core) {
      throw new Error('Core Module can only be imported to AppModule.');
    }
  }
}
