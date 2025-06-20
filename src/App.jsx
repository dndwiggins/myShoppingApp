import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/navBar'
import { Home } from './components/home'
import { Card, Catalog } from './components/catalog'
import { QuantitySelector } from './components/quantitySelector'
import { CheckOut, CartPage } from './components/cart'
import { Routes, Route } from 'react-router-dom';




function App() {

  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubtotal] = useState(0)

  

  return (
    <>
      <NavBar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Catalog setSubtotal={setSubtotal} subTotal={subTotal} cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<CartPage subTotal={subTotal} setSubtotal={setSubtotal} cartItems={cartItems} setCartItems = {setCartItems} />} />
      </Routes>
    </>
  );
}

export default App
