export interface Transaction {
    PercentSettingId: number;
    BillTransactionItemId: number;
    TransactionDate: Date;
    ItemName: string;
    BillItemPriceId: number;
    TotalAmount: number;
    BillingType: string;
    FullName: string;
    ServiceDepartmentName: string;
    BillTxnItemId?: any;
}