import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Home } from './components/home.jsx'
import { Catalog } from './components/catalog.jsx'
import { CartPage } from './components/cart.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </StrictMode>,
)
