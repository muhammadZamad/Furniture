import React from 'react'
import logo from "../../images/logo.jpeg"
import { FaSearch } from "react-icons/fa";
import { ShoppingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg Navbar">
  <div class="container-fluid">
    <Link class="navbar-brand"><img src={logo} style={{height:"60px",cursor:"pointer"}}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/product'>Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to='/about'>About</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Page
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/auth/login">Login</Link></li>
            <li><Link class="dropdown-item" to="/cart">Cart</Link></li>
            <li><Link class="dropdown-item" to="/auth/categories">Categories</Link></li>
            <li><Link class="dropdown-item" to="/auth/categories">checkout</Link></li>
            <li><Link class="dropdown-item" to="/auth/categories">Product Details</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to='/contact'>Contact</Link>
        </li>

        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search  " aria-label="Search"style={{border:"none",borderBottom:"2px solid black",backgroundColor:"#F2E1D9",borderRadius:"0px"}}/> 
        
        
        <button class="btn " type="submit"><FaSearch/></button>
      </form>
      <Link style={{fontWeight:"bold",cursor:"pointer",textDecoration:"none",color:"black"}}></Link> <b>My Account </b><ShoppingOutlined style={{fontSize: "150%", width: "70px", height:"25px"}} />
    </div>
  </div>
</nav>
    </>
  )
}
