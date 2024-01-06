import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
	return (
		<div className="header">
			<img
				src={require("./images/amazon_logo.png")}
				alt="Amazon logo"
				className="header_logo"
			/>

			<div className="header_search">
				{/* Search bar in the header */}
				<input type="text" className="header_searchInput" />

				<SearchIcon className="header_searchIcon" />
				{/* Logo */}
			</div>

			<div className="header_nav">
				<div className="header_option">
					<span className="header_optionLineOne">Hello Guest</span>

					<span className="header_optionLineTwo">Sign In</span>
				</div>

				<div className="header_option">
					<span className="header_optionLineOne">Returns</span>

					<span className="header_optionLineTwo">& Orders</span>
				</div>

				<div className="header_option">
					<span className="header_optionLineOne">Your</span>

					<span className="header_optionLineTwo">Prime</span>
				</div>

				<div className="header_optionShoppingCart">
					<ShoppingCartIcon />
					<span className="header_optionLineTwo header_CartCount">0</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
