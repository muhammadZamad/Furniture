import React from 'react'
import { Link } from "react-router-dom";
import error from "../../images/error-404-page-found.webp";
export default function NoPage() {
  return (
    <>
    <div className="container py-5">
        <div className="row ">
            <div className="col d-flex justify-content-center align-items-center">
              <img src={ error } alt="404 Error" />
              <br />
                {/* <h1 className='text-center mb-0'>ERROR 404!</h1> */}
            </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
                <h2 style={{color: "#FD8F5F"}} className='text-center mb-0'>..ooops Page Not Found</h2>

          </div>
        </div>
        <div className="row py-5">
          <div className="col d-flex justify-content-center align-items-center">
             <Link to="/">  <button style={{background: "#FD8F5F"}} className='btn ' type='button'>Back To Home</button></Link> 

          </div>
        </div>
    </div>
    </>
  )
}
