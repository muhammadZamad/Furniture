import React from 'react'
import sofa1 from "../../../images/sofa1.jpg";
import sofa2 from "../../../images/sofa2.jpg";
import sofa3 from "../../../images/sofa3.jpg";
import {Link} from "react-router-dom"
export default function Products() {
  return (
    <>
        <div className='container ' id='chairs'>
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
        
    </>
  )
}
