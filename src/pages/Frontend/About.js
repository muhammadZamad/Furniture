import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Aboutbrand from '../../components/Sub-components/Aboutbrand'
import Instagramproducts from '../../components/Sub-components/Products/Instagramproducts'
import chairabout from "../../images/chairabout.png"
import chairabout2 from "../../images/chairabout2.png"
export default function About() {
  return (
    <>
    <Aboutbrand/>
    <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className="row">
        <div className="col">
          <div className="card text-center " style={{marginTop:"40px",}}>
            <h1 style={{FontWeight:"900",}}>OUR STORY</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, suscipit aliquid blanditiis nemo distinctio ab laudantium est neque non reiciendis autem itaque illo vero exercitationem at quaerat cupiditate beatae quod?
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
            <img src={chairabout} className="ClipPathImg" style={{width:"100%",}}/>
        </div>
      </div>
    </div>
    <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className="row">
        <div className="col">
          <div className="card text-center " style={{marginTop:"40px",}}>
            <h1 style={{FontWeight:"900",}}>JOURNEY START FROM</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro harum veniam, velit laboriosam voluptates temporibus sit soluta officiis, sint debitis ipsa sapiente nisi? Consectetur alias assumenda, perferendis expedita ipsa suscipit.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
            <img src={chairabout2} className="ClipPathImg" style={{width:"100%",}}/>
        </div>
      </div>
    </div>
    <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className="row">
        <div className="col">
          <div className="card text-center " style={{marginTop:"40px",}}>
            <h1 style={{FontWeight:"900",}}>2023</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, suscipit aliquid blanditiis nemo distinctio ab laudantium est neque non reiciendis autem itaque illo vero exercitationem at quaerat cupiditate beatae quod?
          </div>
        </div>
      </div>
    </div>
    <Instagramproducts/>
    </>
  )
}
