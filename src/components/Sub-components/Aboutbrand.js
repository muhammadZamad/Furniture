import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from "../../images/chair.jpg"
export default function Aboutbrand() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col clippath'>
            </div>
        </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col'>

        
        <div class="card bg-dark Brand-img">
          <img src={Img1} style={{width:"100%",height:"500px",left:"0px",right:"0px"}} alt='BrandImg'/> 
        <div class="card-img-overlay" style={{marginTop:"100px",marginLeft:"10px",position:"absolute",justifyContent:"center",alignItems:"center"}}>
          <p style={{fontFamily: "Playfair Display",fontWeight:"900",fontSize:"50px"}}>ABOUT </p>
          <div  style={{fontSize: "20px"}}>Home / <Link to='About' style={{color:"black"}}>Contact</Link></div>
    </div>
        </div>
      </div>
      </div>
    </div>

     
    </>
  )
}
