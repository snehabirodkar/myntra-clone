import React from 'react'
import Cards from './components/Cards';
import Pdata from "./components/Pdata";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return(
      <>
	  <Navbar />
	  <div className="flexed">
	  {
          Pdata.map((val, index) => {
            return(
              <Cards
                  key={index}
                  imgsrc = {val.imgscr}
                  pname = {val.pname}
                  product = {val.product}
                  price = {val.price}
              />
            )
          })
        }
	  </div>

      </>
  )
}

export default App;
