import NotFound from "./not-found";

export default function ProductReview({params}:{params:{reviewId:string ;productId:string}}){
    if (parseInt(params.reviewId)>1000){
        return NotFound();
    }
    return<h1>Product  {params.productId} review {params.reviewId}</h1>
}