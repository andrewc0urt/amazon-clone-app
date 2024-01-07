import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getShoppingCartTotal } from "./reducer";

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();

	// Get the total price of all items in the shopping cart
	let cart_subtotal = 0;

	for (let item = 0; item < basket.length; item++) {
		cart_subtotal += basket[item].price;
	}

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket?.length} items):
							<strong>{value}</strong>
						</p>
						<small className="subtotal_gift">
							<input type="checkbox" />
							This order contains a gift.
						</small>
					</>
				)}
				decimalScale={2} // Go to 2 decimal places
				// value={cart_subtotal} // Current amount being passed in
				value={getShoppingCartTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
