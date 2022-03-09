import React from "react";
import Images from "../Images";
import './Navbar.css';

const menu = ["Mens","Womens","Kids","Home & Living", "Beauty"];
function Navbar(){
	return (
		<div className="">
			{/* Logo Section */}
			<div className="">
			<img src="https://wallpapercave.com/wp/wp9101967.jpg" alt="myntra logo" className="" width="70" height="50"/>
			</div>
			{/* Menu section */}
			<div className="">
				{
					menu.map(item=>(
						<div className="" key={item}>
							<p>{item}</p>
						</div>
					))
				}
			</div>
			{/* Search Section */}
			<div className="">
				<input type="search" placeholder="Search for Products..." />
			</div>
			{/* User profile */}
			<div className=""></div>
		</div>
	)
 }
 export default Navbar;
