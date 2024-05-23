"use client";

import { useRouter } from "next/navigation"
import { useState } from "react";

export default function OrderProduct(){
    const [isClicked,setIsClicked]=useState(false);
    const router=useRouter();
    const handleClick=()=>{
        setIsClicked(true);
        setTimeout(()=>{
            router.push("/");
        },2000)
    }
    return(
        <>
        <h1>Order Product</h1>
            <button
                onClick={handleClick}
            >
                {isClicked ? "Placing . . . " : "Place Order --> "}
            </button>
        </>
        
    )
}

