import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsVisible: false
    },
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showCart(state) {
            state.cartIsVisible = true;
        },
        hideCart(state) {
            state.cartIsVisible = false;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer; 