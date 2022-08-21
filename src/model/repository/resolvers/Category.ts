// import { products } from "../../DB/products";
import { Context } from "../../interfaces/ContexInterface";
import { Product } from "../../interfaces/ProductInterface";
export const Category = {
    products :({id}:any , {filter}:any , {products } :Context)=>{
        const filterCategoryProducts = products.filter((product :Product )=> product.categoryId===id);
        return filter ?
        filter.onSale ? 
        filterCategoryProducts.filter((product :Product) => product.onSale) : 
        filterCategoryProducts.filter((product :Product)=> !product.onSale) : 
        filterCategoryProducts
    }
}