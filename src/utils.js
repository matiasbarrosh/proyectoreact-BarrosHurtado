export function getProductos(){
    console.log("Get Productos...")

    return fetch('https://fakestoreapi.com/products')
    .then((respuesta) => {
        
        if(respuesta.status <400) {
            console.log("termino bien el pedido")
        } else {
            console.log("termino mal el pedido")
        }

        const datos = respuesta.json()
        return datos

    })
    .then((respuesta) => {
        return respuesta
    })
    .catch((error) =>{
        console.log("termino el pedido mal")
        console.log(error)
    })
}
