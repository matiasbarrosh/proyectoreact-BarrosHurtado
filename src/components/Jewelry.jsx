//Hace display a todos los objetos de la categoria Joyeria mediante presentacional
import { useState , useEffect } from "react"
import Presentacional from "./Presentacional"
import { getJoyeria } from "../utils"
function Joyeria(){
   
   const [productos, setJoyeria] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(()=>{
        const resultado = getJoyeria()
        resultado.then(productos=>{
            console.log("Termino de traerse productos")
            setJoyeria(productos)
            setLoading(false)
        })
    },[])
   
    if(loading) return <p>cargando...</p>
    console.log(productos)
    return(
        <Presentacional productos={productos}/>
    )
}

export default Joyeria