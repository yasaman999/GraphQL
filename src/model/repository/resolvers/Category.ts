import { products } from "../../DB/products";
export const Category = {
    products :(parent:any , args:any , context:any)=>{
        return products.filter(product => product.categoryId===parent.id);
    }
}