import { v4  } from "uuid"
import { categories } from "../../DB/categories";
import { products } from "../../DB/products";
import { reviews } from "../../DB/reviews";
import { Category } from "../../interfaces/CategoryInterface";
import { Context } from "../../interfaces/ContexInterface";
import { Product } from "../../interfaces/ProductInterface";
import { Review } from "../../interfaces/ReviewInterface";
// import { categories } from "../../DB/categories";
// import { Category } from "./Category";
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
    },
    addReview : (parent:any, {input}:any, {reviews}:Context) => {
        const { title, comment, rating, productId } = input;
        const newReview = {
           id : v4(), title, comment, rating, productId 
        }
        reviews.push(newReview);
        return newReview;
    },
    deleteCategory : (parent:any, { id }:any, {categories}:Context) => {
        const index=categories.findIndex((category:Category)=>category.id === id)
        categories.splice(index, 1)
        //categories = categories.filter((category:Category)=>category.id !== id)
        products.map((product)=> {product.categoryId === id ? 
        product.categoryId = null
        : product.categoryId = product.categoryId
    })
        return true;
    },
    deleteProduct : (parent:any, { id }:any, {products}:Context) => {
        const productIndex = products.findIndex((product:Product) => product.id === id);
        products.splice(productIndex, 1);
        const reviewIndex = reviews.findIndex((review:Review) => review.productId === id);
        reviews.splice(reviewIndex, 1);
        return true;
    }

}
