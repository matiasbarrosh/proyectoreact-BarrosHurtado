//Componentes + JSX
//Esto es un componente
//Los componentes son funciones que arrancan con MAYUSC, siempre tiene retorno y solo pueden retornar un elemento
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import { getProductos } from "./utils"
import { BrowserRouter } from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <NavBar/>
      <ItemListContainer/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
