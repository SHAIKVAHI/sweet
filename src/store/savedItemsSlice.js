import { createSlice } from '@reduxjs/toolkit';

const savedItemsSlice = createSlice({
    name: 'savedItems',
    initialState: {
        items: []
    },
    reducers: {
        saveForLater(state, action) {
            state.items.push(action.payload);
        },
        moveToCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        }
    }
});

export const savedItemsActions = savedItemsSlice.actions;
export default savedItemsSlice.reducer; 