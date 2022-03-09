import React from "react";
import Images from "../Images";
import './Navbar.css';
import myntraLogo from "../myntra.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faSearch, faUser, faHeart} from '@fortawesome/free-solid-svg-icons'

const menu = ["Mens","Womens","Kids","Home & Living", "Offer"];
function Navbar(){
	return (
		<nav id="navbar">
			<div className="container navigation">
			<div className="content-wrapper">
			<div className="flexed">
			{/* Logo Section */}
			<div className="">
			<img src={myntraLogo} alt="myntra logo" className="" width="70" height="50"/>
			</div>
			{/* Menu section */}
			<div className="flexed">
				{
					menu.map(item=>(
						<div className="inner-content" key={item}>
							<p>{item}</p>
						</div>
					))
				}

			</div>
			{/* Search Section */}
			<div className="border">
			<FontAwesomeIcon icon={faSearch} className="font-color"/>
				<input className = "padding	" type="search" placeholder="Search for Products, brands and more..." />
			</div>
			{/* User profile */}
			<div className="flexed">
				{/* Profile */}
				<div className="p-r-10">
				<FontAwesomeIcon icon={faUser} className="font-color" />
				<p>Profile</p>
				</div>

				{/* Whishlist */}
				<div className="p-r-10">
				<FontAwesomeIcon icon={faHeart} className="font-color" />
				<p>Wishlist</p>
				</div>

				{/* Cart */}
				<div className="p-r-10">
				<FontAwesomeIcon icon={faBagShopping} className="font-color" />
				<p>Cart</p>
				</div>
			</div>
		</div>
			</div>
		</div>
		</nav>
	)
 }
 export default Navbar;
