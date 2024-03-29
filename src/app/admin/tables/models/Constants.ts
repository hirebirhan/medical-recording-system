import {PageEvent} from "@angular/material/paginator";

export class Constants {
    public static apiRoot = '/api'; // If there is some prefix for all the APIs, then define that in constants.
    public static API_VERSIONS = {
        Version1: 'version1',
    };
    public static pageSettings(): PageEvent {
        return {
            length: 0,
            pageIndex: 0,
            pageSize: 10,
        };
    }

    public static pageSizeOptions: number[] = [10, 25, 50, 100];
}

export enum UserActions {
    Add = 'ADD',
    Details = 'DETAILS',
    Update = 'UPDATE',
    Delete = 'DELETE',
    Cancel = 'CANCEL',
}