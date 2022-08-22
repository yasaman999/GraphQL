import { v4  } from "uuid"
import { products } from "../../DB/products";
import { Category } from "../../interfaces/CategoryInterface";
import { Context } from "../../interfaces/ContexInterface";
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
    }

}
