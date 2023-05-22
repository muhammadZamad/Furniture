import React from 'react'
import { FaFacebook, FaPinterest,FaTwitter, FaTruck,FaWallet, FaMoneyBill,FaRegClock   } from "react-icons/fa";
import logo from "../../images/logo.jpeg"
import { FloatButton } from 'antd';
import { VerticalAlignTopOutlined  } from '@ant-design/icons';
import {Link} from "react-router-dom"

export default function Footer() {
  const year=new Date().getFullYear();
  return (
    <>
    <div className="footer">
    <div className='container'>
    <div class="row row-cols-1 row-cols-md-4 g-4" style={{marginTop:"20px"}}>
  <div class="col">
    <div class="card cardbg">
      
      <div class="card-body">
        
        <FaTruck style={{width:"7rem",height:"7rem"}}/>
        <h4>Fast & Free Delivery</h4>
        <p>Free delivery on all orders</p>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card cardbg">
      
      <div class="card-body">
        <FaWallet style={{width:"7rem",height:"7rem"}}/>
        <h4>Secure Payement</h4>
        <p>Free delivery on all orders</p>
      </div>
    </div>
  </div>
  <div class="col">
  <div class="card cardbg">
      <div class="card-body">
        <FaMoneyBill style={{width:"7rem",height:"7rem",color:"none"}}/>
        <h4>Money Back Gurantee</h4>
      <p>Free delivery on all orders</p>
      </div>
    </div>
    
  </div>
  <div class="col">
    <div class="card cardbg">
      <div class="card-body">
      <FaRegClock style={{width:"7rem",height:"7rem",color:"none"}}/>

        <h4>Online Support</h4>
      <p>Free delivery on all orders</p>
      </div>
    </div>
  </div>
</div>
 
      <div className='row row-cols-1 row-cols-md-4 upfooter' >
      <div className='col'> 
        <ul>
          <li><img src={logo} style={{height:"60px"}}/></li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quibusdam nam porro, </li>
          <li><FaFacebook style={{fontSize:"30px",color:"white",marginLeft:"5px",marginTop:"20px"}}/><FaTwitter style={{fontSize:"30px",color:"white",marginLeft:"5px",marginTop:"20px"}}/><FaPinterest style={{fontSize:"30px",color:"white",marginLeft:"5px",marginTop:"20px"}}/></li>
        </ul>
        </div>
        <div className='col' > 
        <ul>
          <li><h4>Quick Links</h4></li>
          <li>Image License</li>
          <li>Style Guide</li>
          <li>Privacy Policy</li>
        </ul>
        </div>
        <div className='col'> 
        <ul>
          <li><h4>Shop Category</h4></li>
          <li>Image License</li>
          <li>Style Guide</li>
          <li>Privacy Policy</li>
        </ul>
        </div>
        <div className='col'> 
        <ul>
          <li><h4>Partners</h4></li>
          <li>Image License</li>
          <li>Style Guide</li>
          <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="col-12 col-md-12 text-center">
          <hr />
        <p>Copyright &copy;{year}All right reserved.| 🌹💖Muhammad Zamad💖🌹</p>
      </div>
      </div>
      
      </div>
      </div>
      <FloatButton.BackTop  
      icon={<VerticalAlignTopOutlined   style={{ color: '#FD9057', fontSize: "130%", textAlign: "center" }} />}
      />
    </>
  )
}
