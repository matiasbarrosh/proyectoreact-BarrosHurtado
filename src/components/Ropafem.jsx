import { useState , useEffect } from "react"
import Presentacional from "./Presentacional"
import { getRopafem } from "../utils"
function Ropafem(){
   
   const [productos, setRopafem] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(()=>{
        const resultado = getRopafem()
        resultado.then(productos=>{
            console.log("Termino de traerse productos")
            setRopafem(productos)
            setLoading(false)
        })
    },[])
   
    if(loading) return <p>cargando...</p>

    return(
        <Presentacional productos={productos}/>
    )
}

export default Ropafem