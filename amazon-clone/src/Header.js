import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
	const [{ basket }, dispatch] = useStateValue(); // dispatch may not be used at all, but kept it in for simplicity

	return (
		<div className="header">
			<Link to={"/"}>
				<img
					src={require("./images/amazon_logo.png")}
					alt="Amazon logo"
					className="header_logo"
				/>
			</Link>

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

				<Link to={"/checkout"}>
					<div className="header_optionShoppingCart">
						<ShoppingCartIcon />
						<span className="header_optionLineTwo header_CartCount">
							{basket?.length} {/* Question mark is for optional chaining */}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
