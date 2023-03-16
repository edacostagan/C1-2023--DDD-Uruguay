export interface IOpenNewTicketCommand{    
    ticketID?: string;    
    openDate?: Date;    
    deviceID?: string;     
    repairsID?: string;    
    employeeID?: string;         
    isOpen?: boolean;    
    dateClose?: Date;
}