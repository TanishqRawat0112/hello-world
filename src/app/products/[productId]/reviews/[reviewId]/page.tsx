"use client";
import {notFound} from "next/navigation"

function getRandomInt(count:number){
    return Math.floor(Math.random() * count);
}
export default function ProductDetails( {params}:{
    params:{reviewId:string,productId:string}
} ){
    // const random = getRandomInt(2);
    // if(random===1){
    //     throw new Error("Error loading Review");
    // }
    if(parseInt(params.reviewId)>1000){
        return notFound()
    }
    return <h1>Review {params.reviewId} for the product {params.productId} : </h1>
}