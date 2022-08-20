import { categories } from "../../DB/categories";
import { products } from "../../DB/products";
import { Product } from "./Product";
import { calAvgRating } from "../calAvgRating";

export const Query = {
    color : () => "blue",
    colors : () => ["red", "blue", "black"],
    age : () => 21,
    score : () => 31.65,
    isBlue : () => true, 
    products : (parent:any , {filter}:any , context:any) =>{
        // return (filter && filter.onSale) ? 
        // products.filter(product => product.onSale) :
        // products   //in dakhele film intori code zade bood.
        return filter ?
        filter.onSale ?
        products.filter(product => product.onSale) :
        products.filter(product => !product.onSale) ?
        [1, 2, 3, 4, 5].includes(filter.avgRating) ?
        products.filter(product => calAvgRating(product) >= filter.avgRating):
        console.log("avg rateing must be between 1 and 5"):
        products:
        products
    },
    product : (parent : any, args : any, context : any) => {
        const productId = args.id;
        return (products.find((product) => product.id === productId) ?? null);
    },
    categories : () => categories,
    category : (parent : any, args : any, context : any) => {
        const { id } = args;
        return categories.find((category) => category.id === id);
    }
}