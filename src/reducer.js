import { INCREASE, DECREASE, REMOVE, CLEAR_CART } from "./Actions";

function reducer(state, action) {
  // CLEAR_CART
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], total_items: 0, bill: 0 };
  }

  // INCREASE
  if (action.type === INCREASE) {
    let tempCart = state.cart;
    let matched = false;

    tempCart = state.cart.map((cartItem) => {
      if (action.payload.id === cartItem.id) {
        cartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
        matched = true;
      }
      return cartItem;
    });

    if (matched === false) {
      tempCart = [...state.cart, action.payload];
    }

    return {
      ...state,
      cart: tempCart,
      total_items: state.total_items + 1,
      bill: state.bill + parseFloat(action.payload.price),
    };
  }

  // If no action matches, return the existing state
  return state;
}

export default reducer;
