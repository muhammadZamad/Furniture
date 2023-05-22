import React from 'react'

import { Routes, Route } from "react-router-dom"
// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// Pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import NoPage from "./NoPage";
import Cart from './Cart';
export default function Index() {
  return (
  <>
  <Header />
  <main>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='product' element={<Products />} />
      <Route path='cart' element={<Cart />} />


        <Route path='*' element={<NoPage />} />
    </Routes>
  </main>
  <Footer />
  </>
  )
}
