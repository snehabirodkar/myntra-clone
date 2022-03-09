import React from "react";
import Images from "../Images";
import "../../helper.css";
import Pdata from "./Pdata";
import style from "./Cards.css";
// import $ from 'jquery';

// $('.slider').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	autoplay: true,

// 	fade: true,
// 	cssEase: 'linear'
//   });

//   function slickPause() {
// 	  $('.slider').slick('slickPause');
//   }

//   slickPause();

//   $('.slider').mouseover(function() {
// 	  $('.slider').slick('slickPlay')
//   });
//   $('.slider').mouseout(function() {
// 	  slickPause();
//   });

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="slider">
		<img src={props.imgsrc} alt="" className="product-image" />
          {/* <div className="slide"></div> */}
          {/* <div class="slide"></div>
          <div class="slide"></div> */}
        </div>
        <div className="card-info">
          <h3 className="card-category">{props.pname}</h3>
          <p className="card-title">{props.product}</p>
          <p className="card-price">{props.price}</p>
		  <div className="wishlist-wrapper">
		  <button className="wishlist"> Add to bag </button>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
