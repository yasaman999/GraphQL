import { products } from "../../DB/products";
export const Category = {
    products :(parent:any , {filter}:any , context:any)=>{
        const filterCategoryProducts = products.filter(product => product.categoryId===parent.id);
        return filter ?
        filter.onSale ? 
        filterCategoryProducts.filter(product => product.onSale) : 
        filterCategoryProducts.filter(product => !product.onSale) : 
        filterCategoryProducts
    }
}