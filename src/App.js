import React from "react";
import "./App.css";
import Cards from "./components/Product/Cards";
import Pdata from "./components/Product/Pdata";
import Navbar from "./components/Navbar/Navbar.jsx";
import Filter from "./components/Filter/Filter.jsx";
import Sort from "./components/Sort/Sort.jsx";

const App = () => {
  return (
    <>
      <Navbar />
	  <Sort />
      <div className="outer-wrapper">
        <div className="filter-left-content">
          <Filter />
        </div>
        <div className="container left-content-border">
          <div className="flexed">
            {Pdata.map((val, index) => {
              return (
                <Cards
                  key={index}
                  imgsrc={val.imgscr}
                  pname={val.pname}
                  product={val.product}
                  price={val.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
