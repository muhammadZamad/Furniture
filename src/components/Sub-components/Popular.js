import React from 'react'
import Products from './Products/Products'
import sofa3 from "../../images/sofa3.jpg"

import {Link } from "react-scroll"
import Otherproduct from './Products/Otherproduct'
import TopLikeProduct from './Products/TopLikeProduct'


export default function Popular() {
  return (
    <>
    <div className='container  Popular text-center'>
    <div class="row">
  <div class="col">
    <div class="card ">
      <div class="card-body">
        <h2 class="card-title" style={{fontWeight:"900"}}>POPULAR PRODUCTS</h2>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
    </div>
    </div>
   {/* Scroll Cards */}
   <Products/>
      <div class="card mb-3" style={{marginTop:"40px",backgroundColor:"#F2E1D9"}} >
  <div class="row g-0">
    <div class="col-md-8">
      <img src={sofa3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-4">
      <div class="card-body" style={{marginTop:"80px"}}>
        <h1 class="card-title" style={{fontFamily:"Arial",fontWeight:"900"}}>BEST FURNITURE<br/> MANUFACTURER</h1>
        <br/>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><br/><br/>
        <button type="button" class="btn btn-warning btn-lg text-white">DISCOVER MORE</button>
      </div>
    </div>
  </div>
</div>
      <Otherproduct/>
      <TopLikeProduct/>

    </>
  )
}
