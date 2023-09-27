const ItemListContainer = (props) => {
    return(
    <main className="main">
        <p>Bienvenido {props.nombre}!</p>
        <p>Tenes años {props.edad}!</p>
      </main>
    )
}

export default ItemListContainer