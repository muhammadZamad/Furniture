import React from 'react'
import sofa2 from "../../../images/sofa2.jpg";
import sofa3 from "../../../images/sofa3.jpg";
import {Link} from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
export default function Instagramproducts() {
  return (
    <>
     <div class="card mb-3" style={{marginTop:"40px"}} >
  <div class="row g-0">
    
    <div class="col-md-4">
      <div class="card-body" style={{marginTop:"50px"}}>
      <FaInstagram style={{fontSize:"100px",color:"#fa7e1e"}}/>
            <h1 class="card-title" style={{fontFamily:"Arial",fontWeight:"900"}}>BEST FURNITURE<br/> MANUFACTURER</h1>
        <br/>
        
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><br/><br/>
        <button type="button" class="btn btn-lg text-white" style={{backgroundColor:"#fa7e1e"}} >DISCOVER MORE</button>
      </div>
    </div>
    <div class="col-md-4">
      <img src={sofa2} class="img-fluid rounded-start" style={{height:"100%"}} alt="..."/>
    </div>
    <div class="col-md-4">
      <img src={sofa3} class="img-fluid rounded-start" style={{height:"100%"}} alt="..."/>
    </div>
  </div>
</div>
    </>
  )
}
