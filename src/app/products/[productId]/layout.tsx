export default function ProductDetailsLayout({
    children,
}:{
    children:React.ReactNode
}){
    return(
        <>
            {children}
            <h2 style={{backgroundColor:"cyan"}}>Features Details</h2>
        </>
    )
}