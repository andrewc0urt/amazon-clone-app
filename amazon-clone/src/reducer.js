// Think of this as the data layer

export const initialState = {
	basket: [],
};

// Selector to get the total price of all items in the shopping cart
// Using a selector is a better practice than a for loop (as seen in Subtotal.js - currently commented out)
export const getShoppingCartTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);

	//
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		default:
			return state;
	}
};

export default reducer;
