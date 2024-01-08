import React, { createContext, useContext, useReducer } from "react";

// Creates (prepares) the dataLayer
export const StateContext = createContext();

// Wraps the app and provides the Data Layer to any components
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// Pulls the information from the data layer
export const useStateValue = () => useContext(StateContext);
