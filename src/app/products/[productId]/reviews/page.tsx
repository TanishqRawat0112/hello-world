export default function Reviews({params}:{params:{productId:string}}){
    return(
        <>
            <h1>reviews about the product:</h1>
            <ul>
                <li>Review 1 about product {params.productId}:</li>
                <li>Review 2 about product {params.productId}:</li>
                <li>Review 3 about product {params.productId}:</li>
            </ul>
        </>
    )
    
}