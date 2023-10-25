//Hace display a todos los objetos de la categoria Ropa masculina mediante presentacional
import { useState , useEffect } from "react"
import Presentacional from "./Presentacional"
import { getRopamen } from "../utils"
function Ropamen(){
   
   const [productos, setRopamen] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(()=>{
        const resultado = getRopamen()
        resultado.then(productos=>{
            console.log("Termino de traerse productos")
            setRopamen(productos)
            setLoading(false)
        })
    },[])
   
    if(loading) return <p>cargando...</p>

    return(
        <Presentacional productos={productos}/>
    )
}

export default Ropamen