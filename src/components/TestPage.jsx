import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function TestPage(props){
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const params = useParams()

    useEffect(()=>{

        setTimeout(()=> {
            setLoading(false)
            props.productos.forEach(producto=>{
                    console.log(producto.id)
                    if(producto.id===parseInt(params.id)){
                        setProducto(producto)
                    }
            })
        })
    })

    return(
        <div>
            <h2>Producto {params.id}</h2>
        </div>
    )
}
export default TestPage