import { Category } from "./CategoryInterface";
import { Product } from "./ProductInterface";
import { Review } from "./ReviewInterface";

export interface Context {
    products : Product[] ;
    categories : Category[];
    reviews : Review[];
}