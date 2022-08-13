import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableConstants, UserActions } from 'app/core/constants/constants';

@Component({
  selector: 'app-base-table-component',
  templateUrl: './base-table-component.component.html',
  styleUrls: ['./base-table-component.component.scss']
})
export class BaseTableComponentComponent implements OnChanges  {
  // Its a key value pair, where key should be matching the columns in the table data, where as
    // the value should be the column display name.
    @Input() columnDefinition: any = {}; 
    // This is an array of the table data which needs to be displayed.
    @Input() tableData: any[];
    // pixles after which the table data must be over flowed.
    @Input() tableOverFlowLimit: any;
 
    dataSource: MatTableDataSource<any>; // its any since, the data type is defined at runtime by the parent component.
    pageSize = TableConstants.pageSettings().pageSize; // default page size for the Table.
    pageSizeOptions: number[] = TableConstants.pageSizeOptions; // This tells how many items can be displayed per page.
    pageProperties: PageEvent = TableConstants.pageSettings();
    // Column definition for the CRUD operations.
    actionColumnName = 'Actions';
    // since, its a crud table, therefore an enum has been defined representing those actions.
    readonly userActions: typeof UserActions = UserActions;
    readonly objectKeys = Object.keys;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

 ///https://gist.github.com/UmerIftikhar/17b52dfe598f2e05e94d7bacca434f22

}
