import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import savedItemsReducer from './savedItemsSlice';
import uiReducer from './uiSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        savedItems: savedItemsReducer,
        ui: uiReducer
    }
});

export default store; 