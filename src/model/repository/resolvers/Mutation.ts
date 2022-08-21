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
    }
}