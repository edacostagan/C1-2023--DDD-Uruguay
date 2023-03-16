export interface IChangeWarrantyEndDateCommand{
    warrantyID: string;
    newEndDate: Date;    
    warrantyReason: string;
}