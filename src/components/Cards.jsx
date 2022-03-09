import React from 'react'
import Images from './Images'
import "../helper.css";
import Pdata from "./Pdata";

const Cards = (props) => {
  return(
      <div className="">
          <div className="cards">
              <div className="card">
                    <img src={props.imgsrc} alt="" />
                    <div className="card-info">
                        <h1 className='text-uppercase'>{props.pname}</h1>
                        <h4 className='text-capitalize'>{props.product}</h4>
                        <p>{props.price}</p>
                    </div>
              </div>
          </div>
      </div>
  )
}

export default Cards
