export interface Product
{
    id : string;
    name : string;
    description : string;
    quantity : number;
    price : number;
    onSale : boolean;
    categoryId : string | null ;
}