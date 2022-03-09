import React from "react";
import "../../helper.css";
import style from "./Filter.css";

const Filter = () => {
  return (
    <div className="position-fixed left-content-border">
      <div className="filter-wrapper">
        <div className="container">
		{/* <h3>Filter</h3> */}
         <div className="label-space">
		 <input type="radio" name="gender" />
          <label>Men</label>
          <br />
          <input type="radio" name="gender" />
          <label>Women</label>
          <br />
          <input type="radio" name="gender"/>
          <label>Boys</label>
		  <br />
		  <input type="radio" name="gender"/>
          <label>Girls</label>
		 </div>
        </div>
      </div>


	  <div className="filter-wrapper">
        <div className="container">
		<h3>Categories</h3>
         <div className="label-space">
		 <input type="checkbox" />
          <label>Shirts</label>
          <br />
          <input type="checkbox" />
          <label>Sleep Shirts</label>
          <br />
          <input type="checkbox" />
          <label>Dog shirts</label>
		 </div>
        </div>
      </div>


	  <div className="filter-wrapper">
        <div className="container">
		<h3>Brands</h3>
          <div className="label-space">
		  <input type="checkbox" />
          <label>Zara</label>
          <br />
          <input type="checkbox" />
          <label>Parx</label>
          <br />
          <input type="checkbox" />
          <label>Roadster</label>
		  <br />
          <input type="checkbox" />
          <label>Park Avenue</label>
		  <br />
          <input type="checkbox" />
          <label>Peter England</label>
		  <br />
          <input type="checkbox" />
          <label>United Colors of Benetton</label>
		  <br />
          <input type="checkbox" />
          <label>ColorPlus</label>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
