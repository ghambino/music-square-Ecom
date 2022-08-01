
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/redux/cartReducer";

// const reducer = combineReducers({
//   cartReducer,
// });

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;
