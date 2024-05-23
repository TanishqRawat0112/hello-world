import Link from "next/link"

export default function ProductList(){
    return(
        <>
        <Link href="/"><h1>Home</h1></Link>
            <h1>Product List : </h1>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
            </ul>
        </>
    )
}