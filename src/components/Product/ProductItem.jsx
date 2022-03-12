import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToWishlist } from "../../redux/features/data";

const ProductItem = () => {
    const productData = useSelector((state) => state.appData.value.data)
    const dispatch = useDispatch();
    return (
        <>
            <div className="container left-content-border">
                <div className="right-content">
                    {
                        productData.map((value, index) => {
                            const { id, pname, product, category, imgscr, price, visible } = value;
                            var linkto = "/details/"+id;
                            return visible ?
                                (
                                    <div className="cards" key={index}>
                                        <div className="card">
                                            <div className="slider">
                                                <NavLink to={linkto}>
                                                    <img src={imgscr} alt="" className="product-image" />
                                                </NavLink>
                                                {/* <div className="slide"></div> */}
                                                {/* <div class="slide"></div>
                                      <div class="slide"></div> */}
                                            </div>
                                            <div className="card-info">
                                                <h3 className="card-category">{pname}</h3>
                                                <p className="card-title">{product}</p>
                                                <p className="card-price">{price}</p>
                                                <div className="wishlist-wrapper">
                                                    <button className="wishlist" onClick={() => { dispatch(addToWishlist(value)) }}> Add to Wishlist </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductItem;
