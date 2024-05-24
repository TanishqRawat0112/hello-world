export default function Docs({params}:{params:{
    slug:string[];
}}){
            if(params.slug?.length===1){
                return <h2>
                    Documents Feature {params.slug[0]}:
                </h2>
            }
            else if(params.slug?.length===2){
                return <h2>
                    Documents Feature {params.slug[0]}s Concept {params.slug[1]}:
                </h2>
            }
            else if(params.slug?.length===3){
                return <h2>
                    Documents Feature {params.slug[0]}s Concept {params.slug[1]}s example {params.slug[2]}:
                </h2>
            }
            return <h1>Docs Home Page : </h1>
}