import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import itemsReducer from "./cartItemsSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        items: itemsReducer,
    },
});

export default store;
