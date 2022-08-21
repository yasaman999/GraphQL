// import { categories } from "../../DB/categories";
// import { reviews } from "../../DB/reviews";
import { Category } from "../../interfaces/CategoryInterface";
import { Context } from "../../interfaces/ContexInterface";
import { Review } from "../../interfaces/ReviewInterface";
export const Product = {
    category :({categoryId}:any , args:any , {categories}:Context)=>{
        return categories.find((category :Category)=> category.id===categoryId);
    },
    reviews : ({id}:any, args:any, {reviews}:any) => {
        return reviews.filter((review :Review)=> review.productId === id)
    }
}