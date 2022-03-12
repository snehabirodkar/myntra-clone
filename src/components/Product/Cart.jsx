import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/features/data";
import style from "./Modal.css";
import Cards from "./Cards.css";

const Cart = () => {
 const cartData = useSelector(state => state.appData.value.cart)
 const dispatch = useDispatch();
//  removeFromWishList
return(
	<>
	<div className="modal-wrapper">
	  <div className="right-content">
		{cartData.map((value, index) => {
		  const { id, pname, product, category, imgscr, price, visible } =
			value;
		  return visible ? (
			<div className="cards" key={index}>
			  <div className="card">
				<div className="slider">
				  <img src={imgscr} alt="" className="product-image" />
				  {/* <div className="slide"></div> */}
				  {/* <div class="slide"></div>
									<div class="slide"></div> */}
				</div>
				<div className="card-info">
				  <h3 className="card-category">{pname}</h3>
				  <p className="card-title">{product}</p>
				  <p className="card-price">{price}</p>
				  <div className="wishlist-wrapper">
				  <button
					  className="wishlist"
					  onClick={() => {
						// dispatch(addToCheckout(value));
					  }}
					>
					  Add to Cart
					</button>
					<button
					  className="wishlist"
					  onClick={() => {
						dispatch(removeFromCart(value));
					  }}
					>
					  Remove from Cart
					</button>
				  </div>
				</div>
			  </div>
			</div>
		  ) : null;
		})}
		{/* {JSON.stringify(wishlistData, 3, 3)} */}
	  </div>
	</div>
  </>
)
}
export default Cart;
