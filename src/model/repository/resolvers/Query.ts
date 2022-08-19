import { categories } from "../../categories";
import { products } from "../../products";
export const Query = {
    color : () => "blue",
    colors : () => ["red", "blue", "black"],
    age : () => 21,
    score : () => 31.65,
    isBlue : () => true, 
    products : () => products,
    product : (parent : any, args : any, contex : any) => {
        const productId = args.id;
        return (products.find((product) => product.id === productId) ?? null);
    },
    categories : () => categories,
    category : (parent : any, args : any, contex : any) => {
        const { id } = args;
        return categories.find((category) => category.id === id);
    }
}