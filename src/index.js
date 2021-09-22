import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import data from "./data";

import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Initial state value
const initialState = {
  cart: data,
  total_items: 2, // data.length
  bill: 1350, // sum(data.price)
};

// Create a globalized Redux store using initialState as the initial value
// and `reducer` to update the logic
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
