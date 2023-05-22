import React from 'react'
// images
import cart1 from "../../images/card1.webp"
import cart2 from "../../images/card2.webp"
export default function Cart() {
  return (
    <>
    {/* <div id="preloader-active">
<div className="preloader d-flex align-items-center justify-content-center">
<div className="preloader-inner position-relative">
<div className="preloader-circle"></div>
<div className="preloader-img pere-text">
<img src="assets/img/logo/loder.png" alt="" />
</div>
</div>
</div>
</div> */}


<div className="slider-area ">
<div className="slider-active">
<div className="single-slider hero-overly2  slider-height2 d-flex align-items-center slider-bg2">
<div className="container">
<div className="row">
<div className="col-xl-6 col-lg-8 col-md-8">
<div className="hero__caption hero__caption2">
<h1 data-animation="fadeInUp" data-delay=".4s">Cart List</h1>
<nav aria-label="breadcrumb">
<ol className="breadcrumb">
<li className="breadcrumb-item"><a href="index.html">Home</a></li>
<li className="breadcrumb-item"><a href="#">Cart List</a></li>
</ol>
</nav>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<section className="cart_area section-padding40">
<div className="container">
<div className="cart_inner">
<div className="table-responsive">
<table className="table">
<thead>
<tr>
<th scope="col">Product</th>
<th scope="col">Price</th>
<th scope="col">Quantity</th>
<th scope="col">Total</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<div >
<div className="d-flex">
<img className="media" style={{height: "100px", width: "100px"}} src={ cart1 } alt="" />
</div>
<div className="media-body">
<p>Minimalistic shop for multipurpose use</p>
</div>
</div>
</td>
<td>
<h5>$360.00</h5>
</td>
<td>
<div className="product_count">
<span className="input-number-decrement"> <i className="ti-minus"></i></span>
<input className="input-number" type="text" value="1" min="0" max="10" />
<span className="input-number-increment"> <i className="ti-plus"></i></span>
</div>
</td>
<td>
<h5>$720.00</h5>
</td>
</tr>
<tr>
<td>
<div >
<div className="d-flex">
<img className="media" style={{height: "100px", width: "100px"}} src={ cart2 } alt="" />
</div>
<div >
<p className="media-body">Minimalistic shop for multipurpose use</p>
</div>
</div>
</td>
<td>
<h5>$360.00</h5>
</td>
<td>
<div className="product_count">
<span className="input-number-decrement"> <i className="ti-minus"></i></span>
<input className="input-number" type="text" value="1" min="0" max="10" />
<span className="input-number-increment"> <i className="ti-plus"></i></span>
</div>
</td>
<td>
<h5>$720.00</h5>
</td>
</tr>
<tr className="bottom_button">
<td>
<a className="btn" href="#">Update Cart</a>
</td>
<td></td>
<td></td>
<td>
<div className="cupon_text float-right">
<a className="btn" href="#">Close Coupon</a>
</div>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td>
<h5>Subtotal</h5>
</td>
 <td>
<h5>$2160.00</h5>
</td>
</tr>
<tr className="shipping_area">
<td></td>
<td></td>
<td>
<h5>Shipping</h5>
</td>
<td>
<div className="shipping_box">
<ul className="list">
<li>
Flat Rate: $5.00
<input type="radio" aria-label="Radio button for following text input" />
</li>
<li>
Free Shipping
<input type="radio" aria-label="Radio button for following text input" />
</li>
<li>
Flat Rate: $10.00
<input type="radio" aria-label="Radio button for following text input" />
</li>
<li className="active">
Local Delivery: $2.00
<input type="radio" aria-label="Radio button for following text input" />
</li>
</ul>
<h6>
Calculate Shipping
<i className="fa fa-caret-down" aria-hidden="true"></i>
</h6>
<select className="shipping_select">
<option value="1">Bangladesh</option>
<option value="2">India</option>
<option value="4">Pakistan</option>
</select>
<select className="shipping_select section_bg">
<option value="1">Select a State</option>
<option value="2">Select a State</option>
<option value="4">Select a State</option>
</select>
<input className="post_code" type="text" placeholder="Postcode/Zipcode" />
<a className="btn" href="#">Update Details</a>
</div>
</td>
</tr>
</tbody>
</table>
<div className="checkout_btn_inner float-right">
<a className="btn" href="#">Continue Shopping</a>
<a className="btn checkout_btn" href="#">Proceed to checkout</a>
</div>
</div>
</div>
</div>
</section>

    </>
  )
}
