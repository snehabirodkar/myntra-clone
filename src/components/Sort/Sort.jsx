import React from "react";
import "../../helper.css";
import style from "./Sort.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

const Sort = () => {
  return (
    <div className="container">
      <h4>Shirts For Men </h4>
      <div className="flexed">
        <div className="">
          <strong>FILTERS</strong>
        </div>
        <div className="container">
          {/* <FontAwesomeIcon icon={faSearch} className="font-color"/> */}
          {/* <input className="padding" type="text" placeholder="Sort by..." /> */}
          <div class="dropdown">
            <div className="flexed">
              <div class="dropbtn">Sort by : <strong>Recommended</strong> </div>
			  <div className="caret-icon">
              <FontAwesomeIcon icon={faAngleDown} className="font-color" />
            </div>
            </div>

            <div class="dropdown-content">
              <a href="#">What's New</a>
              <a href="#">Popularity</a>
              <a href="#">Better Discount</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
