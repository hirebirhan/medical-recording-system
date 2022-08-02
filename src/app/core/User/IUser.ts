export interface IUser {
    username: string;
    password: string;
}
export interface IUserDetails {
    FirstName: string;
    LastName: string;
    MiddleName: string;
    Roles: IRole[];
    AuditableData?:AuditablityAttributes
}
export interface IRole {
    Name: string;
    permissions: string[];
}
export interface AuditablityAttributes {
    Id: string;
    IsActive: boolean;
    IsDeleted: boolean
    CreatedAt: Date
    UpdatedAt: Date;
    DeletedAt: Date
    CreatedBy: string;
    Updatedby: string
    DeletedBy: string
}