import React, { useState } from "react";
import "../../helper.css";
import style from "./Filter.css";
import Pdata from "../Product/Pdata";

const Filter = ({filterResult}) => {

  return (
    <div className="filter-left-content">
        <div className="position-fixed left-content-border">
            <div className="filter-wrapper">
              <div className="container">
                <div className="label-space">
                <input type="radio" name="gender" onClick={() => filterResult('men')}/>
                <label>Men</label>
                <br />
                <input type="radio" name="gender" onClick={() => filterResult('women')}/>
                <label>Women</label>
                <br />
                <input type="radio" name="gender" onClick={() => filterResult('boys')}/>
                <label>Boys</label>
                <br />
                <input type="radio" name="gender" onClick={() => filterResult('girls')}/>
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
                    <input type="checkbox" onClick={() => filterResult('zara')}/>
                      <label>Zara</label>
                      <br />
                      <input type="checkbox" onClick={() => filterResult('parx')} />
                      <label>Parx</label>
                      <br />
                      <input type="checkbox" onClick={() => filterResult('roadster')} />
                      <label>Roadster</label>
                      <br />
                      <input type="checkbox" onClick={() => filterResult('harvard')} />
                      <label>Harvard</label>
                      <br />
                      <input type="checkbox" onClick={() => filterResult('wrogn')} />
                      <label>Wrogn</label>
                      <br />
                </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default Filter;
