import { useParams } from "react-router-dom";


export default function User(){

    const names = useParams();
    console.log("🚀 ------------------------🚀")
    console.log("🚀 ~ User ~ names:", names)
    console.log("🚀 ------------------------🚀")
    const { name } = names;
     
    return(
        <>
        <h1>Hello {name}</h1>
        </>
    )   
}



