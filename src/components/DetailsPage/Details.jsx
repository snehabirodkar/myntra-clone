import React from "react";
import Breadcrums from "./Breadcrums";
import "./Details.css";
import Style from "../../helper.css"
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";

const Details = () => {
  return (
    <>
      <Breadcrums title="Home/Details/Shirts" />
      <div className="container">
        <div className="details-outer-wrapper">
		  <ProductImages />
		  <ProductDetails />
        </div>
      </div>
    </>
  );
};

export default Details;
