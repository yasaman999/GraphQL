import { reviews } from "../DB/reviews"
import { Product } from "../interfaces/ProductInterface"

export const calAvgRating = (product : Product) => {
    let sumRating = 0
    let numberOfRating = 0
    reviews.forEach((review) => {
    (review.productId === product.id) ?
    (function() {
        sumRating += review.rating;
        numberOfRating++; 
    })():
    () => {}
    });
    return sumRating / numberOfRating;
    
} 
 
