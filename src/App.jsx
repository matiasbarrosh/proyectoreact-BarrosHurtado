//Componentes + JSX
//Esto es un componente
//Los componentes son funciones que arrancan con MAYUSC, siempre tiene retorno y solo pueden retornar un elemento
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import CartWidget from "./components/CartWidget"
const App = () => {

  const nombre = "Matias"
  const edad = 23

  return (
    <>

    <NavBar/>

    <ItemListContainer
    nombre="Matias"
    edad={23}
    />

    <Footer/>

    </>
  )
}

export default App
