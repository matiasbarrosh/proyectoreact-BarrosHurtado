import { Route, Routes } from "react-router-dom"
import { useState , useEffect } from "react"
import Forms from "./Forms"
import Contador from "./Contador"
import Container from "./Container"
import TestPage from "./TestPage"


const ItemListContainer = () => {
    
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  
  return(
    <main className="main">
      <Container/>
      <Routes>
          <Route path="/" element={<p>Home</p>}/>
          <Route path="/clothing" element={<p>Ropa</p>}/>
          <Route path="/joyas" element={<p>Joyas</p>}/>
          <Route path="/cart" element={<p>Carrito</p>}/>
          <Route path="*" element={<p>404 Vuelva a intentar por favor</p>}/>
          <Route path="/item/:id" element={<TestPage/>}/>
      </Routes>
    </main>
    )
}

export default ItemListContainer
