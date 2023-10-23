import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProductos } from "../utils"

function IndividualItem(){
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState({})
    const params = useParams()

    useEffect(()=>{
        const resultado = getProductos()
        resultado.then(productos=>{
            console.log("Termino de traerse productos")
            setProductos(productos)
            setLoading(false)

            setTimeout(()=> {
            productos.find(productos=>{
                if(productos.id === parseInt(params.id)) {
                    console.log(productos)
                    setProductos(productos)
                }
            })
        }, 2000);
        })
  
    },{})
 

    return(
        <div className="card-container">
            <h2 className="card__title">{productos.title} - ${productos.price}</h2>
            <img className="card__image" src={productos.image} alt={productos.title} />
            <p>{productos.description}</p>
        </div>

    )
}
export default IndividualItem

