export interface TodoItem{
    id:number;
    dateOfCreation:string;
    dateOfUpdate:string|undefined|null;
    assignTo:string;
    status:string;
    currentlyForwardedTo:string;
    
}