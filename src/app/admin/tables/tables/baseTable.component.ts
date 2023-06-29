import {Constants, UserActions} from '../models/Constants';
import {Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-base-table',
    templateUrl: './baseTable.component.html',
    styleUrls: ['./baseTable.component.scss'],
})
export class BaseTableComponent<T> implements OnChanges {
    // Its a key value pair, where key should be matching the columns in the table data, where as
    // the value should be the column display name.
    @Input() columnDefinition: any = {}; 
    // This is an array of the table data which needs to be displayed.
    @Input() tableData: any[];
    // pixles after which the table data must be over flowed.
    @Input() tableOverFlowLimit: any;
 
    dataSource: MatTableDataSource<any>; // its any since, the data type is defined at runtime by the parent component.
    pageSize = Constants.pageSettings().pageSize; // default page size for the Table.
    pageSizeOptions: number[] = Constants.pageSizeOptions; // This tells how many items can be displayed per page.
    pageProperties: PageEvent = Constants.pageSettings();
    // Column definition for the CRUD operations.
    actionColumnName = 'Actions';
    // since, its a crud table, therefore an enum has been defined representing those actions.
    readonly userActions: typeof UserActions = UserActions;
    readonly objectKeys = Object.keys;

    // If this is set to true, then each time the user click the next page, an API call will be made to fetch the data.
    @Input() enableBackendPagination = false;
    // If this is set to true, then each time the user types something in the search text, an API call will be made to fetch the data.
    @Input() enableBackendSearch = false;

    // Tool Tips for the respective CRUD Operations. [define the absolute values from the parent]
    @Input() readonly addRowText: string;
    @Input() readonly editRowText: string;
    @Input() readonly deleteRowText: string;
    @Input() readonly viewDetailRowText: string;

    // Actions to be displayed for respective Table. [dnt forget to actionCalled event if any of them is enabled]
    @Input() readonly displayEditAction: boolean = true;
    @Input() readonly displayDeleteAction: boolean = true;
    @Input() readonly displayDetailAction: boolean = true;
    @Input() readonly displayCreateAction: boolean = true;

    // This is called to notify the parent which CRUD operation is called, along with the current row object.
    @Output() readonly actionCalled = new EventEmitter();
    // This is called to notify the parent when the next, previous or items per page is clicked.
    // If enableBackendPagination is set to true, a call is made to the Parent component, which in turn calls the API.
    @Output() readonly pageEventCalled = new EventEmitter();
    // This is called to notify the parent when the user types in something in the search field.
    // If enableBackendSearch is set to true, a call is made to the Parent component, which in turn calls the API.
    @Output() readonly searchCalled = new EventEmitter();

    // Respective components as per Angular Material Design Guidelines.
    @ViewChild(MatTable, { static: true }) table: MatTable<any>;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor() {
        this.dataSource = new MatTableDataSource([]);
    }

    ngOnChanges() {
        this.columnDefinition.CRUD_OPERATION = this.actionColumnName;
        this.dataSource.data = this.tableData || [];
        this.dataSource.sort = this.sort;
        if (!this.enableBackendPagination) {
            this.dataSource.paginator = this.paginator;
        }
    }

    applySearchFilter(filterValue: string) {
        const valueToSearch = filterValue.trim().toLowerCase();
        if(this.enableBackendSearch) {
            this.searchCalled.emit(valueToSearch);      
        }
        if (this.enableBackendPagination) {
            this.paginator.firstPage();
        } else {
            this.dataSource.filter = valueToSearch;
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        }
    }

    performAction(action, obj) {
        // If actionCalled is not defined, then simply return.
        // Although if actions are enabled then actionCalled should also be defined as well.
        if (!this.actionCalled) {
            return;
        }
        this.actionCalled.emit({
            action,
            obj,
        });
    }

    pageChanged(pageEvent: PageEvent) {
        if (!pageEvent || !this.pageEventCalled) {
            return;
        }
        this.pageEventCalled.emit(pageEvent);
    }
}