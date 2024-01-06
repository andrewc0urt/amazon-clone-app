import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout_leftSide">
				<img
					className="checkout_ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="Amazon Ad Banner at Checkout"
				/>

				<div>
					<h2 className="checkout_title">Your Shopping Cart</h2>

					{/* Basket Item */}
					{/* Basket Item */}
					{/* Basket Item */}
					{/* Basket Item */}
					{/* Basket Item */}
					{/* Basket Item */}
				</div>
			</div>

			<div className="checkout_rightSide">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
