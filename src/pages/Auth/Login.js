import React from 'react'
import chair from "../../images/chair.jpg"
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
    <img src={chair}  className="LoginBack" alt="" />
    <div className="container logincard">
    <div class="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card" style={{backgroundColor:"#F2E1D9",padding:"30px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
      <div class="card-body">
        <div className='text-center'>
          <h1>LOGIN</h1>
          <p className=' d-none d-sm-block'>Enter login details to get access</p>
          <hr />
        </div>
        <label htmlFor="username"><h4>Username</h4> </label>
           <div class="input-group mb-3" style={{marginTop:"5px"}}>
              <input type="text" class="form-control" placeholder="Enter Username" aria-label="Username" aria-describedby="basic-addon1"/>
           </div>
           <label htmlFor="username"><h4>Password</h4> </label>
           <div class="input-group mb-3" style={{marginTop:"5px"}}>
              <input type="password" class="form-control" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1"/>
           </div>
           <div>
            <input type="checkbox" />Keep Me Login
            <a href="#" style={{position:"absolute",right:"30px",textDecoration:"none", color: "#FD8F5F"}}>Forgot Password?</a>
           </div>
           <div style={{marginTop:"50px",marginBottom:"20px"}}>
            Dont have an account? <a style={{color: "#FD8F5F"}} href="Register">Sign Up</a>here
            <button className='btn loginbtn'>Login</button>
           </div>
          
      </div>
    </div>
  </div>
  </div>
  </div>
    </>
  )
}
