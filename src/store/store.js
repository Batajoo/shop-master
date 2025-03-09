import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice"

const store = configureStore({
    reducer: cartReducer
})

export default store;

