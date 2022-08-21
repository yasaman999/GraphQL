import { v4  } from "uuid"
import { Context } from "../../interfaces/ContexInterface";
export const Mutation = {
    addCategory : (parent:any , {input}:any , {categories}:Context) => {
        const {name} = input
        const newCategory = {
            id : v4() , 
            name
        }

        categories.push(newCategory);
        return newCategory;
    } , 

    addProduct : (parent:any , {input}:any , {products}:Context)=>
    {
        const { name, description, quantity, price, onSale, categoryId} = input;
        const newProduct ={
            id : v4() ,name, description, quantity, price, onSale, categoryId
        }
        products.push(newProduct);
        return newProduct;
    }
}