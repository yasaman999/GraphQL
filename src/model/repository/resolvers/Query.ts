import { categories } from "../../DB/categories";
import { products } from "../../DB/products";
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
        products.filter(product => !product.onSale) :
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