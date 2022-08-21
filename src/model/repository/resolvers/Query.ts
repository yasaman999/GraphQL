// import { categories } from "../../DB/categories";
// import { products } from "../../DB/products";
import { Product } from "../../interfaces/ProductInterface";
import { Category } from "../../interfaces/CategoryInterface";
import { calAvgRating } from "../calAvgRating";
import { Context } from "../../interfaces/ContexInterface";

export const Query = {
    color : () => "blue",
    colors : () => ["red", "blue", "black"],
    age : () => 21,
    score : () => 31.65,
    isBlue : () => true, 
    products : (parent:any , {filter}:any , {products}:Context) =>{
        // return (filter && filter.onSale) ? 
        // products.filter(product => product.onSale) :
        // products   //in dakhele film intori code zade bood.
        return filter ?
        filter.onSale ?
        products.filter((product :Product )=> product.onSale) :
        products.filter((product :Product)=> !product.onSale) ?
        [1, 2, 3, 4, 5].includes(filter.avgRating) ?
        products.filter((product :Product)=> calAvgRating(product) >= filter.avgRating):
        console.log("avg rateing must be between 1 and 5"):
        products:
        products
    },
    product : (parent : any, {id} : any, {products} : Context) => {
        return (products.find((product:Product) => product.id === id) ?? null);
    },
    categories : (parent:any , args:any , {categories}:Context) => categories,
    category : (parent : any, {id} : any, {categories} : Context) => {
        return categories.find((category :Category) => category.id === id);
    }
}