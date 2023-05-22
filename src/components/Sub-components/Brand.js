import React from 'react'
import Img1 from "../../images/chair.jpg"
export default function Brand() {
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
        <div className='Brand-img'><img src={Img1} className="Brand-img" alt='BrandImg'/> </div>
        
        </div>
      </div>

    </div>
    {/* <div className="container sale">
      <div className="row">
        <div className="col">
         
        
        </div>
      </div>
      </div> */}
     
    </>
  )
}
