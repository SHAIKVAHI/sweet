import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import savedItemsReducer from './savedItemsSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        savedItems: savedItemsReducer
    }
});

export default store; 