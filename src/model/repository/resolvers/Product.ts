import { categories } from "../../DB/categories";
import { reviews } from "../../DB/reviews";
export const Product = {
    category :(parent:any , args:any , context:any)=>{
        return categories.find(category => category.id===parent.categoryId);
    },
    reviews : (parent:any, args:any, context:any) => {
        return reviews.filter(review => review.productId === parent.id)

    }
}