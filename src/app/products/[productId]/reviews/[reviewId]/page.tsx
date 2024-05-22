export default function ProductDetails( {params}:{
    params:{reviewId:string,productId:string}
} ){
    return <h1>Review {params.reviewId} for the product {params.productId} : </h1>
}