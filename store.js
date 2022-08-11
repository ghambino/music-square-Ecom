import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/redux/cartReducer";

const preloadCart = JSON.parse(localStorage.getItem("cartItem")) ?? [];

// const reducer = combineReducers({
//   cartReducer,
// });

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: preloadCart,
  },
});

export default store;
