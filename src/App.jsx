//Componentes + JSX
//Esto es un componente
//Los componentes son funciones que arrancan con MAYUSC, siempre tiene retorno y solo pueden retornar un elemento
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { getProductos } from "./utils"
import { BrowserRouter } from "react-router-dom"
import Container from "./components/Container"
import IndividualItem from "./components/IndividualItem"
import Joyeria from "./components/Jewelry"
import Ropafem from "./components/Ropafem"
import Ropamen from "./components/Ropamen"

const App = () => {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
          <Route path="/" element={<Container/>}/>
          <Route path="/productos" element={<Container/>}/>
          <Route path="/clothing-men" element={<Ropamen/>}/>
          <Route path="/clothing-fem" element={<Ropafem/>}/>
          <Route path="/joyas/" element={<Joyeria/>}/>
          <Route path="/cart" element={<p>Carrito</p>}/>
          <Route path="*" element={<p>404 Vuelva a intentar por favor</p>}/>
          <Route path="/item/:id" element={<IndividualItem/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
