import { INCREASE, DECREASE, REMOVE, CLEAR_CART } from "./Actions";

function reducer(state, action) {
  // CLEAR_CART
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], total_items: 0, bill: 0 };
  }

  // If no action matches, return the existing state
  return state;
}

export default reducer;
