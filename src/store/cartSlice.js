const cartSlice = createSlice({
    name: 'cart',
    initialState: getSavedCart(),
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            
            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: Number(newItem.price)
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }
            state.totalQuantity++;
            state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
            }
            state.totalQuantity--;
            state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        emptyCart(state, action) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(state));
        }
    }
});