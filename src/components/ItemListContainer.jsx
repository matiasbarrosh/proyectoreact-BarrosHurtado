import { Route, Routes } from "react-router-dom"
import { useState , useEffect } from "react"
import Forms from "./Ropafem"
import Contador from "./Contador"
import Container from "./Container"
import IndividualItem from "./IndividualItem"
import Joyeria from "./Jewelry"
import Ropafem from "./Ropafem"
import Ropamen from "./Ropamen"

const ItemListContainer = () => {
      
  return(
    <main className="main">

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
    </main>
    )
}

export default ItemListContainer
