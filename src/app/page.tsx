import Link from "next/link"

export default function home(){
    return (
        <>
            <h1>HOME PAGE</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </>
    )
}