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

export function getJoyeria(){
    console.log("Get Productos...")

    return fetch('https://fakestoreapi.com/products/category/jewelery')
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

export function getRopafem(){
    console.log("Get Productos...")

    return fetch("https://fakestoreapi.com/products/category/women's%20clothing")
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

export function getRopamen(){
    console.log("Get Productos...")

    return fetch("https://fakestoreapi.com/products/category/men's%20clothing")
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

export function getSingleProduct(){
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
}