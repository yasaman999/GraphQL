import { categories } from "../../categories";
export const Product = {
    category :(parent:any , args:any , context:any)=>{
        return categories.find(category=>category.id===parent.categoryId);
    }
}