import React from 'react'
import sofa1 from "../../../images/sofa1.jpg";
import sofa2 from "../../../images/sofa2.jpg";
import sofa3 from "../../../images/sofa3.jpg";
import {Link} from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
export default function Otherproduct() {
  return (
    <>

<div className='container  Popular text-center'>
    <div class="row">
  <div class="col">
    <div class="card ">
      <div class="card-body">
        <h2 class="card-title" style={{fontWeight:"900"}}>PRPDUCTS YOU MAY LIKES</h2>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
    </div>
    </div>
      <div className='container ' style={{marginTop:"20px"}}>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card shadow">
      <img src={sofa1} class="card-img-top" alt="..."/>
      <div class="card-body">
        
        <h5><Link style={{textDecoration:"none",color:"black"}}>Bly Microfiber/ Microsuede 56" Armles Loveseat</Link> </h5>
        <h4 className='text-muted text-center '><span style={{color:"red"}}>$40</span></h4>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow">
      <img src={sofa2} class="card-img-top" alt="..."/>
      <div class="card-body">
        
        <h5><Link style={{textDecoration:"none",color:"black"}}>Bly Microfiber/ Microsuede 56" Armles Loveseat</Link> </h5>
        <h4 className='text-muted text-center '><span style={{color:"red"}}>$40</span></h4>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow">
      <img src={sofa3} class="card-img-top" alt="..."/>
      <div class="card-body">
        
        <h5><Link style={{textDecoration:"none",color:"black"}}>Bly Microfiber/ Microsuede 56" Armles Loveseat</Link> </h5>
        <h4 className='text-muted text-center '><span style={{color:"red"}}>$40</span></h4>
      </div>
    </div>
  </div>
</div>
        </div>
        <div class="text-center">
  <button class="btn btn-warning text-white btn-lg" type="button" style={{marginTop:"30px"}}>DISCOVER MORE</button>
</div>   
   {/* Instagram Products */}
  

    </>
  )
}
